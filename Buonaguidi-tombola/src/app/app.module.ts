import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CartellaComponent } from './cartella/cartella.component';

@NgModule({
  declarations: [
    AppComponent,
    CartellaComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
