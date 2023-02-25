import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { SpinnerComponent, ButtonComponent } from './components';

@NgModule({
  declarations: [
    SpinnerComponent,
    ButtonComponent
  ],
  exports: [
    ButtonComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class SharedModule { }
