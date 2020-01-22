import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbortRequestPageComponent } from './abort-request-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AbortRequestPageComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AbortRequestPageComponent
  ]
})
export class AbortRequestPageModule { }
