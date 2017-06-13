import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { AccountOptions } from '../shared/account-options.model';
import { AccountStateStoreDealer } from '../state/account.state-store-dealer';

/**
 * Smart container for account options.
 * Is expected to be route destination.
 * Is aware of service layer (store state dealer in our case).
 * Rules data between dumb components and service (state) layer.
 * Works with streams.
 */
@Component({
  selector: 'gig-account-options-container',
  templateUrl: './account-options-container.component.html',
  styleUrls: ['./account-options-container.component.styl']
})
export class AccountOptionsContainerComponent implements OnInit, OnDestroy {

  /**
   * Used to complete streams and clean up subscriptions
   */
  private takeUntil$ = new Subject();

  accountOptions: AccountOptions;
  loginIdentifierConflictChoices: Array<string>;
  error: string;
  isFetching: boolean;
  isSaving: boolean;
  readonlyMode: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accountStateStoreDealer: AccountStateStoreDealer) { }

  ngOnInit() {
    // Request data
    this.accountStateStoreDealer.getAccountOptions();

    // Check readonly data param in route which opened component
    // Note even although the same single current component is used in both read-only and regular routes
    // component is re-instantiated after navigation between this routes.
    // So we don't need stream subscription on data params updates
    const readonly = Boolean(this.activatedRoute.snapshot.data.readonly);
    this.accountStateStoreDealer.changeReadonlyMode(readonly);

    // Subscribe on data stream
    // Optionally this can be done in template via async pipe (so that no need to handle completions/un-subscriptions)
    // But I don't like too much magic in templates :)
    this.accountStateStoreDealer.accountOptionsDataQuery$
      .takeUntil(this.takeUntil$)
      .subscribe(accountOptionsData => {
        this.accountOptions = accountOptionsData.accountOptions;
        this.loginIdentifierConflictChoices = accountOptionsData.loginIdentifierConflictChoices;
        this.error = accountOptionsData.error;
        this.isFetching = accountOptionsData.isFetching;
        this.isSaving = accountOptionsData.isSaving;
        this.readonlyMode = accountOptionsData.readonlyMode;
      });
  }

  /**
   * Converts passed form to account options model and makes request to save it.
   */
  onAccountOptionsUpdate(form: FormGroup) {
    // Simple proto check just in case
    if (!(form instanceof FormGroup)) {
      // TODO: consider dispatching error action here
      return;
    }
    // Create raw object
    const rawAccountOptionsObject = {};
    Object.keys(form.controls)
      .forEach(key => {
        rawAccountOptionsObject[key] = form.controls[key].value;
      });
    this.accountStateStoreDealer.updateAccountOptions(new AccountOptions(rawAccountOptionsObject));
  }

  ngOnDestroy() {
    // Run signal to complete data streams
    this.takeUntil$.next();
    // Complete subject itself
    this.takeUntil$.unsubscribe();
  }
}
