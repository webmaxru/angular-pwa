import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { ConfigService } from './../config.service';
import { PushSubscriptionService } from './../push-subscription.service';

import { take } from 'rxjs/operators';

// Import SwPush here

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
    // Code to subscribe user to the Push notifications
  }

  unsubscribeFromPush() {
    // Code to unsubscribe user from the Push notifications
  }

  showMessages() {
    // Code to listen to the Push notifications
  }
}
