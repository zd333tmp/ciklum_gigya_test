import { AccountStateStoreDealer } from './state/account.state-store-dealer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AccountApiService } from './shared/account-api.service';
import { AccountOptionsEffects } from './state/account-options/account-options.effects';
import { AccountOptionsContainerComponent } from './account-options-container/account-options-container.component';
import { AccountOptionsFormComponent } from './account-options-form/account-options-form.component';

/**
 * Account feature module.
 */
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(AccountOptionsEffects)
  ],
  declarations: [
    AccountOptionsContainerComponent,
    AccountOptionsFormComponent
  ],
  providers: [
    AccountApiService,
    AccountStateStoreDealer
  ],
  exports: [
    AccountOptionsContainerComponent
  ]
})
export class AccountModule { }
