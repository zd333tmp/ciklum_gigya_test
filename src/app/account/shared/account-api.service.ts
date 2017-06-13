import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, QueryEncoder } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import { AccountOptions } from './account-options.model';

/**
 * Service takes care of communication to back-end API
 * and converting incoming and outgoing data in corresponding formats.
 */
@Injectable()
export class AccountApiService {

  // Use getter so that it return new params object which can be mutated ny adding additional items
  private get commonSearchParams() {
    const params = new URLSearchParams('', new CustomQueryEncoder());
    params.set('userkey', environment.gigyaApiConfig.userKey);
    params.set('secret', environment.gigyaApiConfig.userSecret);
    params.set('apikey', environment.gigyaApiConfig.apiKey);
    params.set('format', 'jsonp');
    params.set('callback', 'JSONP_CALLBACK');
    return params;
  };

  constructor(private jsonp: Jsonp) { }

  /**
   * Makes API call to retrieve account options.
   */
  fetchAccountOptions(): Observable<AccountOptions> {
    return this.jsonp.get(`${environment.gigyaApiConfig.apiUrl}/accounts.getPolicies`, { search: this.commonSearchParams })
      .map(rawResponse => {
        const response = rawResponse.json();
        if (response.errorCode) {
          throw new Error(response.errorMessage || 'API communication error');
        }
        return new AccountOptions(response.accountOptions);
      });
  }

  /**
   * Makes API call to update account options.
   */
  updateAccountOptions(newAccountOptions: AccountOptions): Observable<any> {
    const rawAccountOptions = {
      verifyEmail: newAccountOptions.verifyEmail,
      verifyProviderEmail: newAccountOptions.verifyProviderEmail,
      allowUnverifiedLogin: newAccountOptions.allowUnverifiedLogin,
      preventLoginIDHarvesting: newAccountOptions.preventLoginIDHarvesting,
      sendWelcomeEmail: newAccountOptions.sendWelcomeEmail,
      sendAccountDeletedEmail: newAccountOptions.sendAccountDeletedEmail,
      defaultLanguage: newAccountOptions.defaultLanguage,
      loginIdentifierConflict: newAccountOptions.loginIdentifierConflict,
      loginIdentifiers: newAccountOptions.loginIdentifiers
    };
    const search = this.commonSearchParams;
    search.set('accountOptions', JSON.stringify(rawAccountOptions));
    return this.jsonp.get(`${environment.gigyaApiConfig.apiUrl}/accounts.setPolicies`, { search })
      .map(rawResponse => {
        const response = rawResponse.json();
        if (response.errorCode) {
          throw new Error(response.errorMessage || 'API communication error');
        }
        return;
      });
  }
}

// A workaround to resolve `+` search params encoding issue
// See this:
/**
 * A workaround to resolve `+` search params encoding issue.
 * See: https://github.com/angular/angular/issues/11058
 */
class CustomQueryEncoder extends QueryEncoder {
  encodeKey(k: string): string {
    k = super.encodeKey(k);
    return k.replace(/\+/gi, '%2B');
  }
  encodeValue(v: string): string {
    v = super.encodeValue(v);
    return v.replace(/\+/gi, '%2B');
  }
}
