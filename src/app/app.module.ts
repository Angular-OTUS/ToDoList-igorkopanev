import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import {FormsModule} from "@angular/forms";
import { ToDoListInputComponent } from './components/to-do-list-input/to-do-list-input.component';
import {SharedModule} from "./modules/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    ToDoListInputComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatButtonModule,
        FormsModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
