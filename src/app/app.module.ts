import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppStateModule } from './app-state.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    AccountModule,
    AppStateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
