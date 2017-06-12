import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

/**
 * Houses app-level core stuff (mostly single-used/singletons).
 * IMPORTANT! DO NOT IMPORT THIS MODULE ANYWHERE EXCEPT ROOT MODULE!
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
