import { AbortRequestPageModule } from './abort-request-page/abort-request-page.module';
import { NavPageModule } from './nav-page/nav-page.module';
import { VirtualScrollTreePageModule } from './virtual-scroll-tree-page/virtual-scroll-tree-page.module';
import { MxgraphPageModule } from './mxgraph-page/mxgraph-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MxgraphPageModule,
    VirtualScrollTreePageModule,
    AbortRequestPageModule,
    NavPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
