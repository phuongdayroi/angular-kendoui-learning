import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TodoComponent } from "./todo/todo.component";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';


@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
