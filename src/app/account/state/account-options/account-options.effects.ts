import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Actions, Effect } from '@ngrx/effects';
import { AccountApiService } from '../../shared/account-api.service';
import * as accountOptionsActions from './account-options.actions';

/**
 * Handles account options side-effects (async API communication requests).
 */
@Injectable()
export class AccountOptionsEffects {

  @Effect() getApiCall = this.actions
  .ofType(accountOptionsActions.GET_ACCOUNT_OPTIONS)
  .switchMap(() => {
    return this.accountApiService.fetchAccountOptions()
      .map(accountOptions => new accountOptionsActions.GetAccountOptionsSuccessAction(accountOptions))
      .catch(error => Observable.of(new accountOptionsActions.GetAccountOptionsErrorAction({ error: error.message })));
  });

  @Effect() updateApiCall = this.actions
  .ofType(accountOptionsActions.UPDATE_ACCOUNT_OPTIONS)
  .switchMap(action => {
    const act = action as accountOptionsActions.UpdateAccountOptionsAction;
    const newAccountOptions = act.payload;
    return this.accountApiService.updateAccountOptions(newAccountOptions)
      .map(() => new accountOptionsActions.UpdateAccountOptionsSuccessAction(newAccountOptions))
      .catch(error => Observable.of(new accountOptionsActions.UpdateAccountOptionsErrorAction({ error: error.message })));
  });

  constructor(
    private actions: Actions,
    private accountApiService: AccountApiService) { }
}
