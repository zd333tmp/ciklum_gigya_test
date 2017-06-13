import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterState, routerReducer, RouterStoreModule } from '@ngrx/router-store';
import { accountOptionsReducer, AccountOptionsState } from './account/state/account-options/account-options.reducer';
import { readonlyModeReducer, ReadonlyModeState } from './account/state/readonly-mode/readonly-mode.reducer';

/**
 * Root App state.
 * Collects pieces of state from different feature modules (from only one module in our case).
 * Also houses some root state pieces like session status, etc. (only router state in our case).
 * If we had root state pieces - the it would be defined in `src/app/state` folder.
 * Each state piece would be defined with actions, reducers and (optionally) side-effects.
 * Also there could be `RootStateStoreDealerService` (see account module state as example).
 */
export interface AppState {
  router: RouterState;
  accountOptions: AccountOptionsState;
  accountReadonlyMode: ReadonlyModeState;
}

/**
 * Provides root app state (combined from all state pieces).
 */
@NgModule({
  imports: [
    StoreModule.provideStore({
      router: routerReducer,
      accountOptions: accountOptionsReducer,
      accountReadonlyMode: readonlyModeReducer,
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
