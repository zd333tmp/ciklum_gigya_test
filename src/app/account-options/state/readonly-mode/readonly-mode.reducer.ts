import * as readonlyModeActions from './readonly-mode.actions';

/**
 * Describes account options readonly mode sub-state.
 */
export interface ReadonlyModeState {
  readonlyMode: boolean;
};

const initialState: ReadonlyModeState = {
  readonlyMode: true
};

export function readonlyModeReducer(state = initialState, action: readonlyModeActions.ActionTypes): ReadonlyModeState {
  switch (action.type) {
    // None or unknown action
    default:
      return state;
    case readonlyModeActions.ENABLE_READONLY_MODE:
      return { readonlyMode: true };
    case readonlyModeActions.DISABLE_READONLY_MODE:
      return { readonlyMode: false };
  }
}
