import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountOptionsApiService } from './shared/account-options-api.service';

/**
 * Account options feature module.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AccountOptionsApiService
  ]
})
export class AccountOptionsModule { }
