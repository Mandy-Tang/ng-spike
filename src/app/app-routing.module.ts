import { NavPageComponent } from './nav-page/nav-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MxgraphPageComponent } from './mxgraph-page/mxgraph-page.component';
import { VirtualScrollTreePageComponent } from './virtual-scroll-tree-page/virtual-scroll-tree-page.component';

const routes: Routes = [
  {
    path: 'mxgraph',
    component: MxgraphPageComponent
  },
  {
    path: 'virtual-scroll-tree',
    component: VirtualScrollTreePageComponent
  },
  {
    path: '',
    component: NavPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
