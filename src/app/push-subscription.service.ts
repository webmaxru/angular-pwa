import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ConfigService } from './config.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PushSubscriptionService {
  private pushSubscriptionUrl: string;

  constructor(
    private apiService: ApiService,
    private configService: ConfigService
  ) {
    this.pushSubscriptionUrl = `${this.configService.get(
      'PUSH_API_URL'
    )}/webpush`;
  }

  addSubscriber(subscription): Observable<any> {
    console.log('[Push Subscription Service] Adding subscriber');

    let body = {
      action: 'subscribe',
      subscription: subscription
    };

    return this.apiService.callApi(this.pushSubscriptionUrl, 'POST', body);
  }

  deleteSubscriber(subscription): Observable<any> {
    console.log('[Push Subscription Service] Deleting subscriber');

    let body = {
      action: 'unsubscribe',
      subscription: subscription
    };

    return this.apiService.callApi(this.pushSubscriptionUrl, 'POST', body);
  }
}
