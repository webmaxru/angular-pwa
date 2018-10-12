import { Component, OnInit } from '@angular/core';
import { WindowRef } from './../window-ref';
import { MatSnackBar } from '@angular/material';
// Import SwUpdate here

@Component({
  selector: 'app-shell-update',
  templateUrl: './app-shell-update.component.html',
  styleUrls: ['./app-shell-update.component.css']
})
export class AppShellUpdateComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    private winRef: WindowRef
  ) {}

  ngOnInit() {
    this.subscribeForUpdates();
  }

  subscribeForUpdates() {
    // Code to subscribe for updates
  }

  activateUpdate() {
    console.log('[App Shell Update] activateUpdate started');
    // Code to activate the update
  }

  checkForUpdate() {
    console.log('[App Shell Update] checkForUpdate started');
    // Code to explicitly check for the updates
  }

  openLog() {
    this.winRef.nativeWindow.open('/ngsw/state');
  }
}
