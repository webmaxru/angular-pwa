import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppShellUpdateComponent } from './app-shell-update/app-shell-update.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetFeedsComponent } from './tweet-feeds/tweet-feeds.component';

import { PushSubscriptionComponent } from './push-subscription/push-subscription.component';

@NgModule({
  declarations: [
    NavigationComponent,
    DashboardComponent,
    TweetListComponent,
    TweetFeedsComponent,
    PushSubscriptionComponent,
    AppShellUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
