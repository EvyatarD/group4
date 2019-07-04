import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MColorDirective } from './m-color.directive';
import { MNumberPipe } from './m-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MColorDirective,
    MNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
