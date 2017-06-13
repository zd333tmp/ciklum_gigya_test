import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state.module';
import { AccountOptions } from '../shared/account-options.model';
import * as accountOptionsActions from './account-options/account-options.actions';
import * as readonlyModeActions from './readonly-mode/readonly-mode.actions';

/**
 * Broker between smart component and App state store.
 * Isolates store logic from component layer.
 */
@Injectable()
export class AccountStateStoreDealer {

  // Stream queries/selectors for component layer go here
  // This particular selector is pretty trivial
  // But in real app they would be composable queries that combine different pieces of data
  // (e.g. nest related entities, etc.)
  readonly accountOptionsDataQuery$ = Observable.combineLatest(
    this.store.select(state => state.accountOptions),
    this.store.select(state => state.accountReadonlyMode)
  )
    .map(([accountOptionsSubState, readonlyModeSubState]) => {
      return {
        ...accountOptionsSubState,
        ...readonlyModeSubState
      };
    });

  constructor(private store: Store<AppState>) { }

  /**
   * Dispatches action to retrieve account options.
   */
  getAccountOptions() {
    this.store.dispatch(new accountOptionsActions.GetAccountOptionsAction());
  }

  /**
   * Dispatches action to update account options.
   */
  updateAccountOptions(newAccountOptions: AccountOptions) {
    this.store.dispatch(new accountOptionsActions.UpdateAccountOptionsAction(newAccountOptions));
  }

  /**
   * Dispatches action to update readonly mode.
   */
  changeReadonlyMode(enableReadonlyMode: boolean) {
    if (enableReadonlyMode) {
      this.store.dispatch(new readonlyModeActions.EnableReadonlyModeAction());
      return;
    }
    this.store.dispatch(new readonlyModeActions.DisableReadonlyModeAction());
  }
}
