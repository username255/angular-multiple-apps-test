import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';
import {AppModule} from './app.module';


const routes: Routes = [{
  component: View1Component, path: 'one'
}, {
  component: View2Component, path: 'two'
}, {
  path: '*', redirectTo: 'one'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
