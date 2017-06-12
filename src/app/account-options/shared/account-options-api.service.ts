import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { AccountOptions } from './account-options.model';

/**
 * Service takes care of communication to back-end API
 * and converting incoming and outgoing data in corresponding formats.
 */
@Injectable()
export class AccountOptionsApiService {

  constructor(private http: Http) { }

  /**
   * Makes API call to retrieve account options.
   */
  get(): Observable<AccountOptions> {
    // TODO: implement and get rid of `Observable.of` import
    return Observable.of(null);
  }

  /**
   * Makes API call to update account options.
   * TODO: consider using useful data from success response (instead of empty observable)
   */
  update(newAccountOptions: AccountOptions): Observable<any> {
    // TODO: implement and get rid of `Observable.of` import
    return Observable.of();
  }
}