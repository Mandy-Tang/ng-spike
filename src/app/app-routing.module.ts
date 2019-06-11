import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MxgraphPageComponent } from './mxgraph-page/mxgraph-page.component';

const routes: Routes = [
  {
    path: 'mxgraph',
    component: MxgraphPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
