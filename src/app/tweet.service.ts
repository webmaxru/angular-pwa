import { Injectable } from '@angular/core';

import { ConfigService } from './config.service';
import { ApiService } from './api.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private dataApiUrl: string;

  constructor(
    private apiService: ApiService,
    private configService: ConfigService
  ) {
    this.dataApiUrl = this.configService.get('DATA_API_URL');
  }

  getTimelineTweets(): Observable<any> {
    console.log('[Tweet Service] Requesting timeline');

    return this.apiService.callApi(`${this.dataApiUrl}/timeline`);
  }

  getFavoriteTweets(): Observable<any> {
    console.log('[Tweet Service] Requesting favorites');

    return this.apiService.callApi(`${this.dataApiUrl}/favorites`);
  }

  postTweet(message: string): Observable<any> {
    console.log('[Tweet Service] Posting tweet');

    return this.apiService.callApi(`${this.dataApiUrl}/post-tweet`, 'POST', {
      message
    });
  }
}
