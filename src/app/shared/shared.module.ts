import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

/**
 * Houses common items (filters, directives, components) which are reused across multiple application parts.
 * Place common dumb widget components here!
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }
