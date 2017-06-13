import * as accountOptionsActions from './account-options.actions';
import { AccountOptions } from '../../shared/account-options.model';

/**
 * Describes account options sub-state.
 */
export interface AccountOptionsState {
  accountOptions: AccountOptions;
  isFetching: boolean;
  isSaving: boolean;
  // The same state property for get and update errors
  // TODO: consider splitting to dedicated error properties
  error: string;
};

const initialState: AccountOptionsState = {
  accountOptions: null,
  isFetching: false,
  isSaving: false,
  error: ''
};

export function accountOptionsReducer(state = initialState, action: accountOptionsActions.ActionTypes): AccountOptionsState {
  switch (action.type) {
    // None or unknown action
    default:
      return state;
    // Get actions
    case accountOptionsActions.GET_ACCOUNT_OPTIONS:
      return {
        ...state,
        isFetching: true,
        accountOptions: null,
        error: null
      };
    case accountOptionsActions.GET_ACCOUNT_OPTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        accountOptions: action.payload
      };
    case accountOptionsActions.GET_ACCOUNT_OPTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };
    // Update actions
    case accountOptionsActions.UPDATE_ACCOUNT_OPTIONS:
      return {
        ...state,
        isSaving: true,
        error: null
      };
    case accountOptionsActions.UPDATE_ACCOUNT_OPTIONS_SUCCESS:
      return {
        ...state,
        isSaving: false,
        accountOptions: action.payload
      };
    case accountOptionsActions.UPDATE_ACCOUNT_OPTIONS_ERROR:
      return {
        ...state,
        isSaving: false,
        error: action.payload.error
      };
  }
}