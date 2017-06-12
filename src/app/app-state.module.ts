import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterState, routerReducer, RouterStoreModule } from '@ngrx/router-store';
import { accountOptionsReducer, AccountOptionsState } from './account-options/state/account-options/account-options.reducer';
import { readonlyModeReducer, ReadonlyModeState } from './account-options/state/readonly-mode/readonly-mode.reducer';

/**
 * Root App state.
 * Collects pieces of state from different feature modules (from only one module in our case).
 * Also houses some root state pieces like session status, etc. (only router state in our case).
 */
export interface AppState {
  router: RouterState;
  accountOptions: AccountOptionsState;
  accountOptionsReadonlyMode: ReadonlyModeState;
}

/**
 * Provides root app state (combined from all feature parts).
 */
@NgModule({
  imports: [
    StoreModule.provideStore({
      router: routerReducer,
      accountOptions: accountOptionsReducer,
      accountOptionsReadonlyMode: readonlyModeReducer,
    }),
    RouterStoreModule.connectRouter(),
    // Needed only in dev mode for state debugging purposes
    !environment.production ? StoreDevtoolsModule.instrumentOnlyWithExtension() : [],
  ],
  exports: [
    StoreModule
  ]
})
export class AppStateModule { }
