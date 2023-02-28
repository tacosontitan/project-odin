import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './core/components/header/page-header.component';
import { LeftNavComponent } from './core/components/left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
