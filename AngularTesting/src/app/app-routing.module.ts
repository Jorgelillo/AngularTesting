import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routesMain: Routes = [
  { path:  '', redirectTo: '/example', pathMatch:  'full' },
 ];

/**
 * Main router module of the Application.
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routesMain,
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
