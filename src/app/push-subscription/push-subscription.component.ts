import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwPush } from '@angular/service-worker';

import { ConfigService } from './../config.service';
import { PushSubscriptionService } from './../push-subscription.service';

import { take } from 'rxjs/operators';

@Component({
  selector: 'push-subscription',
  templateUrl: './push-subscription.component.html',
  styleUrls: ['./push-subscription.component.css']
})
export class PushSubscriptionComponent implements OnInit {
  private VAPID_PUBLIC_KEY: string;

  private snackBarDuration: number = 2000;

  constructor(
    private swPush: SwPush,
    private pushSubscriptionService: PushSubscriptionService,
    public snackBar: MatSnackBar,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.VAPID_PUBLIC_KEY = this.configService.get('VAPID_PUBLIC_KEY');
  }

  subscribeToPush() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(pushSubscription => {
        this.pushSubscriptionService.addSubscriber(pushSubscription).subscribe(
          res => {
            console.log('[Push Subscription] Add subscriber request answer', res);

            let snackBarRef = this.snackBar.open(
              'Now you are subscribed',
              null,
              {
                duration: this.snackBarDuration
              }
            );
          },
          err => {
            console.log('[Push Subscription] Add subscriber request failed', err);
          }
        );
      })
      .catch(err => {
        console.error(err);
      });
  }

  unsubscribeFromPush() {
    // Get active subscription
    this.swPush.subscription.pipe(take(1)).subscribe(pushSubscription => {
      console.log('[Push Subscription] pushSubscription', pushSubscription);

      // Delete the subscription on the backend
      this.pushSubscriptionService.deleteSubscriber(pushSubscription).subscribe(
        res => {
          console.log('[Push Subscription] Delete subscriber request answer', res);

          let snackBarRef = this.snackBar.open(
            'Now you are unsubscribed',
            null,
            {
              duration: this.snackBarDuration
            }
          );

          // Unsubscribe current client (browser)
          pushSubscription
            .unsubscribe()
            .then(success => {
              console.log('[Push Subscription] Unsubscription successful', success);
            })
            .catch(err => {
              console.log('[Push Subscription] Unsubscription failed', err);
            });
        },
        err => {
          console.log('[Push Subscription] Delete subscription request failed', err);
        }
      );
    });
  }

  showMessages() {
    this.swPush.messages.subscribe(message => {
      console.log(message);
    });
  }
}
