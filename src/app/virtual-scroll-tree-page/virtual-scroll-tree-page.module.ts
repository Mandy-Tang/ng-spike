import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollTreePageComponent } from './virtual-scroll-tree-page.component';
import { VirtualScrollTreeComponent } from './virtual-scroll-tree/virtual-scroll-tree.component';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  declarations: [VirtualScrollTreePageComponent, VirtualScrollTreeComponent],
  imports: [
    CommonModule,
    TreeModule.forRoot()
  ],
  exports: [
    VirtualScrollTreePageComponent
  ]
})
export class VirtualScrollTreePageModule { }
