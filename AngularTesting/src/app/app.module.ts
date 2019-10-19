import { ExampleRoutingModule } from './example/example-routing.module';
import { NgModule } from '@angular/core';

import { ExampleModule } from './example/example.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Main Module Class.
 *
 * @export
 * @class AppModule
 */
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importing Example module and routes.
    ExampleModule,
    ExampleRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
