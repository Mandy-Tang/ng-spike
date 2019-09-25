import { MxgraphPageComponent } from './mxgraph-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxgraphComponent } from './mxgraph/mxgraph.component';

@NgModule({
  declarations: [
    MxgraphPageComponent,
    MxgraphComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MxgraphPageComponent
  ]
})
export class MxgraphPageModule { }
