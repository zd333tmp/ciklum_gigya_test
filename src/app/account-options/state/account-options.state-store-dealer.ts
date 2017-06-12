import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
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
export class AccountOptionsStateStoreDealer {

  private accountOptionsSubState$ = this.store.select(state => state.accountOptions);

  // Stream queries/selectors for component layer
  readonly accountOptions$ = this.accountOptionsSubState$
    .map(accountOptionsSubState => accountOptionsSubState.accountOptions);
  readonly error$ = this.accountOptionsSubState$
    .map(accountOptionsSubState => accountOptionsSubState.error);
  readonly isFetching$ = this.accountOptionsSubState$
    .map(accountOptionsSubState => accountOptionsSubState.isFetching);
  readonly isSaving$ = this.accountOptionsSubState$
    .map(accountOptionsSubState => accountOptionsSubState.isSaving);
  // Funny tautology :)
  readonly readonlyMode$ = this.store.select(state => state.accountOptionsReadonlyMode)
    .map(readonlyModeSubState => readonlyModeSubState.readonlyMode);

  constructor(private store: Store<AppState>) { }

  /**
   * Dispatches action to retrieve account options.
   */
  getAccountActions() {
    this.store.dispatch(new accountOptionsActions.GetAccountOptionsAction());
  }

  /**
   * Dispatches action to update account options.
   */
  updateAccountActions(newAccountOptions: AccountOptions) {
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
