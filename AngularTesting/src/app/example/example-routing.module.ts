import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent01Component } from './pages/example-component01/example-component01.component';


const routesExample: Routes = [
  { path: 'example', component: ExampleComponent01Component },
];

/**
 * Router class for example module.
 *
 * @export
 * @class ExampleRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routesExample)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
