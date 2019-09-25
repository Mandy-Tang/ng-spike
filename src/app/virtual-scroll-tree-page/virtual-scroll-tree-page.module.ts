import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollTreePageComponent } from './virtual-scroll-tree-page.component';

@NgModule({
  declarations: [VirtualScrollTreePageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    VirtualScrollTreePageComponent
  ]
})
export class VirtualScrollTreePageModule { }
