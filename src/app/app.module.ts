import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppStateModule } from './app-state.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
