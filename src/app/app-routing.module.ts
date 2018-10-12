import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NonCachedRouteComponent } from './non-cached-route/non-cached-route.component';
import { CachedRouteComponent } from './cached-route/cached-route.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'cached-route',
    component: CachedRouteComponent
  },
  {
    path: 'non-cached-route',
    component: NonCachedRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
