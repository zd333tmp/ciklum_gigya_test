import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { AccountStateStoreDealer } from './state/account.state-store-dealer';
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
    ReactiveFormsModule,
    EffectsModule.run(AccountOptionsEffects),
    SharedModule
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
