import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { Tweet } from '../tweet';
import { TweetService } from './../tweet.service';

@Component({
  selector: 'tweet-feeds',
  templateUrl: './tweet-feeds.component.html',
  styleUrls: ['./tweet-feeds.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetFeedsComponent implements OnInit {
  private snackBarDuration: number = 2000;
  isInteractionStarted: boolean = false;

  tweets$: Observable<Tweet[]>;

  constructor(
    private tweetService: TweetService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  loadTimeLine() {
    this.isInteractionStarted = true;

    this.tweets$ = this.tweetService.getTimelineTweets();
  }

  loadFavorites() {
    this.isInteractionStarted = true;

    this.tweets$ = this.tweetService.getFavoriteTweets();
  }
}
