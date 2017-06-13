import { FormGroup } from '@angular/forms/forms';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountOptions } from '../shared/account-options.model';

/**
 * Dumb component that shows and allows editing account options.
 * Works with flat data.
 * Note `OnPush` change detection strategy!
 */
@Component({
  selector: 'gig-account-options-form',
  templateUrl: './account-options-form.component.html',
  styleUrls: ['./account-options-form.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountOptionsFormComponent {

  @Output() accountOptionsUpdate = new EventEmitter<FormGroup>();

  @Input() disabled: boolean;
  @Input() loginIdentifierConflictChoices: Array<String>;
  @Input() errorMessage: string;
  @Input() set accountOptions(value: AccountOptions) {
    if (!value) {
      return;
    }
    this.form.controls['verifyEmail'].setValue(value.verifyEmail);
    this.form.controls['verifyProviderEmail'].setValue(value.verifyProviderEmail);
    this.form.controls['allowUnverifiedLogin'].setValue(value.allowUnverifiedLogin);
    this.form.controls['preventLoginIDHarvesting'].setValue(value.preventLoginIDHarvesting);
    this.form.controls['sendWelcomeEmail'].setValue(value.sendWelcomeEmail);
    this.form.controls['sendAccountDeletedEmail'].setValue(value.sendAccountDeletedEmail);
    this.form.controls['defaultLanguage'].setValue(value.defaultLanguage);
    this.form.controls['loginIdentifierConflict'].setValue(value.loginIdentifierConflict);
    this.form.controls['loginIdentifiers'].setValue(value.loginIdentifiers);
  };

  // Some simple field validators as an example
  // TODO: implement better validation
  form = this.fb.group({
    verifyEmail: [false, Validators.required],
    verifyProviderEmail: [false, Validators.required],
    allowUnverifiedLogin: [false, Validators.required],
    preventLoginIDHarvesting: [false, Validators.required],
    sendWelcomeEmail: [false, Validators.required],
    sendAccountDeletedEmail: [false, Validators.required],
    defaultLanguage: ['', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(3)
    ])],
    loginIdentifierConflict: ['', Validators.required],
    loginIdentifiers: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  submit() {
    if (!this.form.valid) {
      return;
    }
    this.accountOptionsUpdate.emit(this.form);
  }
}
