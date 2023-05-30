import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './structure/dashboard/dashboard.component';
import { LoadingBarComponent } from './helpers/loading-bar/loading-bar.component';
import { MapComponent } from './components/map/map.component';
import { MarbleComponent } from './helpers/marble/marble.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoadingBarComponent,
    MapComponent,
    MarbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
