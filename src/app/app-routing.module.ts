import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    AccountOptionsContainerComponent
} from './account/account-options-container/account-options-container.component';

// Both default and `readonly` routes refer to the same component
// Would be much better to have one route and set readonly mode with query param
// In that case there would stay same instance of component,
// it would subscribe on query params and then act correspondingly.
// But since dedicated `readonly` route is requirement - then use `data` to set readonly mode.
// Another option would be to use resolvers which enables/disables readonly mode in state store,
// or router events subscription (which would do the same).
// But `data.readonly` option seems to fit best.
const rootRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AccountOptionsContainerComponent,
    data: { readonly: false }
  },
  {
    path: 'readonly',
    component: AccountOptionsContainerComponent,
    data: { readonly: true }
  },
  { path: '**', redirectTo: '' }
];

/**
 * Houses and activates app routes.
 * In our case there is no routing in feature modules,
 * thus this are the only routes.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(rootRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
