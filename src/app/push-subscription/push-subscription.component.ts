import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { ConfigService } from './../config.service';
import { PushSubscriptionService } from './../push-subscription.service';


@Component({
  selector: 'push-subscription',
  templateUrl: './push-subscription.component.html',
  styleUrls: ['./push-subscription.component.css']
})
export class PushSubscriptionComponent implements OnInit {
  private VAPID_PUBLIC_KEY: string;

  private snackBarDuration: number = 2000;

  constructor(
    private pushSubscriptionService: PushSubscriptionService,
    public snackBar: MatSnackBar,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.VAPID_PUBLIC_KEY = this.configService.get('VAPID_PUBLIC_KEY');
  }

  subscribeToPush() {

    let convertedVapidKey = this.urlBase64ToUint8Array(this.VAPID_PUBLIC_KEY);

    navigator['serviceWorker']
      .getRegistration('./')
      .then(registration => {

        registration.pushManager
          .subscribe({ userVisibleOnly: true, applicationServerKey: convertedVapidKey })
          .then(pushSubscription => {

            this.pushSubscriptionService.addSubscriber(pushSubscription)
              .subscribe(

                res => {
                  console.log('[App] Add subscriber request answer', res)

                  let snackBarRef = this.snackBar.open('Now you are subscribed', null, {
                    duration: this.snackBarDuration
                  });
                },
                err => {
                  console.error('[App] Add subscriber request failed', err)
                }

              )

          });

      })
      .catch(err => {
        console.error(err);
      })


  }

  unsubscribeFromPush() {

    navigator['serviceWorker']
      .getRegistration('./')
      .then(registration => {

        registration.pushManager
          .getSubscription()
          .then(pushSubscription => {

            this.pushSubscriptionService.deleteSubscriber(pushSubscription)
              .subscribe(

                res => {
                  console.log('[App] Delete subscriber request answer', res)

                  let snackBarRef = this.snackBar.open('Now you are unsubscribed', null, {
                    duration: this.snackBarDuration
                  });

                  // Unsubscribe current client (browser)

                  pushSubscription.unsubscribe()
                    .then(success => {
                      console.log('[App] Unsubscription successful', success)
                    })
                    .catch(err => {
                      console.log('[App] Unsubscription failed', err)
                    })

                },
                err => {
                  console.error('[App] Delete subscription request failed', err)
                }

              )
          })

      })
      .catch(err => {
        console.error(err);
      })

  }


  urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  showMessages() {
    // Code to listen to the Push notifications
  }
}
