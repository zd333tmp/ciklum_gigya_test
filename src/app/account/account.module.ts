import { AccountStateStoreDealer } from './state/account.state-store-dealer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AccountApiService } from './shared/account-api.service';
import { AccountOptionsEffects } from './state/account-options/account-options.effects';

/**
 * Account feature module.
 */
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(AccountOptionsEffects)
  ],
  declarations: [],
  providers: [
    AccountApiService,
    AccountStateStoreDealer
  ]
})
export class AccountModule { }
