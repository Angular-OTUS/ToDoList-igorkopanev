import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MatButtonModule} from "@angular/material/button";
import { ButtonComponent } from './components/button/button.component';



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
