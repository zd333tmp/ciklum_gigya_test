import { Action } from '@ngrx/store';

export const ENABLE_READONLY_MODE = '[Account options readonly mode] Enable';
export const DISABLE_READONLY_MODE = '[Account options readonly mode] Disable';

/**
 * Enable account options readonly mode.
 */
export class EnableReadonlyModeAction implements Action {
  readonly type = ENABLE_READONLY_MODE;
}
/**
 * Disable account options readonly mode.
 */
export class DisableReadonlyModeAction implements Action {
  readonly type = DISABLE_READONLY_MODE;
}

/**
 * All available sub-state action creators types union.
 */
export type ActionTypes = EnableReadonlyModeAction | DisableReadonlyModeAction;
