import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavPageComponent } from './nav-page.component';

@NgModule({
  declarations: [NavPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavPageModule { }
