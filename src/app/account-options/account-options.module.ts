import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AccountOptionsApiService } from './shared/account-options-api.service';
import { AccountOptionsEffects } from './state/account-options/account-options.effects';

/**
 * Account options feature module.
 */
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(AccountOptionsEffects)
  ],
  declarations: [],
  providers: [
    AccountOptionsApiService
  ]
})
export class AccountOptionsModule { }
