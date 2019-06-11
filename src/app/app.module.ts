import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MxgraphComponent } from './mxgraph-page/mxgraph/mxgraph.component';
import { MxgraphPageComponent } from './mxgraph-page/mxgraph-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MxgraphComponent,
    MxgraphPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
