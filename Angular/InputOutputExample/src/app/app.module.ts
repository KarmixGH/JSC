import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputOutputExampleComponent } from './input-output-example/input-output-example.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
