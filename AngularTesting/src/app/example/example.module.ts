import { ExampleComponent01Component } from './pages/example-component01/example-component01.component';
import { ExampleComponent001Component } from './components/example-component001/example-component001.component';
import { Pipe01Pipe } from './pipes/pipe01.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';


/**
 * Example Module.
 *
 * @export
 * @class ExampleModule
 */
@NgModule({
  imports: [
    CommonModule,
    // Importing RoutingModule.
    ExampleRoutingModule
  ],
  declarations: [
    ExampleComponent01Component,
    ExampleComponent001Component,
    Pipe01Pipe
  ]
})
export class ExampleModule { }
