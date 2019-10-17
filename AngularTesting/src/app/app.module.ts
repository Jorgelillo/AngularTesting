import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent01Component } from './example/pages/example-component01/example-component01.component';
import { ExampleComponent001Component } from './example/components/example-component001/example-component001.component';
import { Pipe01Pipe } from './example/pipes/pipe01.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent01Component,
    ExampleComponent001Component,
    Pipe01Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
