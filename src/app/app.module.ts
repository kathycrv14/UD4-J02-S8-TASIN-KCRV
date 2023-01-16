import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaModule } from './directiva/directiva.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DirectivaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
