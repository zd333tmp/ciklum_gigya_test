/**
 * Account options model.
 * Constructor takes raw object (received from back-end API) and saves all fields to private properties.
 * All properties are exposed via getters to ensure immutability.
 * TODO: getters are not best choice, consider refactoring with `immutable.js`
 * A lot of boilerplate code, but ok for test app.
 */
export class AccountOptions {
  private _verifyEmail: boolean;
  private _verifyProviderEmail: boolean;
  private _allowUnverifiedLogin: boolean;
  private _preventLoginIDHarvesting: boolean;
  private _sendWelcomeEmail: boolean;
  private _sendAccountDeletedEmail: boolean;
  private _defaultLanguage: string;
  private _loginIdentifierConflict: string;
  private _loginIdentifiers: string;

  constructor(rawAccountOptions: any) {
    // TODO: take more care of validating and checking raw object
    this._verifyEmail = rawAccountOptions.verifyEmail;
    this._verifyProviderEmail = rawAccountOptions.verifyProviderEmail;
    this._allowUnverifiedLogin = rawAccountOptions.allowUnverifiedLogin;
    this._preventLoginIDHarvesting = rawAccountOptions.preventLoginIDHarvesting;
    this._sendWelcomeEmail = rawAccountOptions.sendWelcomeEmail;
    this._sendAccountDeletedEmail = rawAccountOptions.sendAccountDeletedEmail;
    this._defaultLanguage = rawAccountOptions.defaultLanguage;
    this._loginIdentifierConflict = rawAccountOptions.loginIdentifierConflict;
    this._loginIdentifiers = rawAccountOptions.loginIdentifiers;
  }

  get verifyEmail() {
    return this._verifyEmail;
  }
  get verifyProviderEmail() {
    return this._verifyProviderEmail;
  }
  get allowUnverifiedLogin() {
    return this._allowUnverifiedLogin;
  }
  get preventLoginIDHarvesting() {
    return this._preventLoginIDHarvesting;
  }
  get sendWelcomeEmail() {
    return this._sendWelcomeEmail;
  }
  get sendAccountDeletedEmail() {
    return this._sendAccountDeletedEmail;
  }
  get defaultLanguage() {
    return this._defaultLanguage;
  }
  get loginIdentifierConflict() {
    return this._loginIdentifierConflict;
  }
  get loginIdentifiers() {
    return this._loginIdentifiers;
  }
}
