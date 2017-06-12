import { Action } from '@ngrx/store';
import { AccountOptions } from '../../shared/account-options.model';

export const GET_ACCOUNT_OPTIONS = '[Account options] Get';
export const GET_ACCOUNT_OPTIONS_SUCCESS = '[Account options] Get success';
export const GET_ACCOUNT_OPTIONS_ERROR = '[Account options] Get error';

export const UPDATE_ACCOUNT_OPTIONS = '[Account options] Update';
export const UPDATE_ACCOUNT_OPTIONS_SUCCESS = '[Account options] Update success';
export const UPDATE_ACCOUNT_OPTIONS_ERROR = '[Account options] Update error';

/**
 * Get account options begin action
 */
export class GetAccountOptionsAction implements Action {
  readonly type = GET_ACCOUNT_OPTIONS;
}
/**
 * Get account options finished successfully action
 */
export class GetAccountOptionsSuccessAction implements Action {
  readonly type = GET_ACCOUNT_OPTIONS_SUCCESS;
  constructor(public payload: AccountOptions) { }
}
/**
 * Get account options finished with error action
 */
export class GetAccountOptionsErrorAction implements Action {
  readonly type = GET_ACCOUNT_OPTIONS_ERROR;
  constructor(public payload: { error: string }) { }
}

/**
 * Update account options begin action
 */
export class UpdateAccountOptionsAction implements Action {
  readonly type = UPDATE_ACCOUNT_OPTIONS;
  constructor(public payload: AccountOptions) { }
}
/**
 * Update account options finished successfully action
 */
export class UpdateAccountOptionsSuccessAction implements Action {
  readonly type = UPDATE_ACCOUNT_OPTIONS_SUCCESS;
  constructor(public payload: AccountOptions) { }
}
/**
 * Update account options finished with error action
 */
export class UpdateAccountOptionsErrorAction implements Action {
  readonly type = UPDATE_ACCOUNT_OPTIONS_ERROR;
  constructor(public payload: { error: string }) { }
}

/**
 * All available sub-state action creators type union
 */
export type ActionTypes = GetAccountOptionsAction | GetAccountOptionsSuccessAction | GetAccountOptionsErrorAction
| UpdateAccountOptionsAction | UpdateAccountOptionsSuccessAction | UpdateAccountOptionsErrorAction;
