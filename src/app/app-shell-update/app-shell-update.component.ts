import { Component, OnInit } from '@angular/core';
import { WindowRef } from './../window-ref';
import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-shell-update',
  templateUrl: './app-shell-update.component.html',
  styleUrls: ['./app-shell-update.component.css']
})
export class AppShellUpdateComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    private winRef: WindowRef,
    private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    this.subscribeForUpdates();
  }

  subscribeForUpdates() {
    this.swUpdate.available.subscribe(event => {
      console.log(
        '[App Shell Update] Update available: current version is',
        event.current,
        'available version is',
        event.available
      );
      
      let versionMessage = event.available.appData ? event.available.appData['versionMessage'] : ''
      let snackBarRef = this.snackBar.open(
        versionMessage || 'Newer version of the app is available.',
        'Refresh the page'
      );

      snackBarRef.onAction().subscribe(() => {
        this.activateUpdate();
      });
    });

    this.swUpdate.activated.subscribe(event => {
      console.log(
        '[App Shell Update] Update activated: old version was',
        event.previous,
        'new version is',
        event.current
      );
    });
  }

  activateUpdate() {
    console.log('[App Shell Update] activateUpdate started');
    this.swUpdate
      .activateUpdate()
      .then(() => {
        console.log('[App Shell Update] activateUpdate completed');
        this.winRef.nativeWindow.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  }

  checkForUpdate() {
    console.log('[App Shell Update] checkForUpdate started');
    this.swUpdate
      .checkForUpdate()
      .then(() => {
        console.log('[App Shell Update] checkForUpdate completed');
      })
      .catch(err => {
        console.error(err);
      });
  }

  openLog() {
    this.winRef.nativeWindow.open('/ngsw/state');
  }
}
