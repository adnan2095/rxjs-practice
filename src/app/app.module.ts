import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './structure/dashboard/dashboard.component';
import { LoadingBarComponent } from './helpers/loading-bar/loading-bar.component';
import { MapComponent } from './components/map/map.component';
import { MarbleComponent } from './helpers/marble/marble.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { ListComponent } from './helpers/list/list.component';
import { ArrowComponent } from './helpers/arrow/arrow.component';
import { UsageContainerComponent } from './helpers/usage-container/usage-container.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoadingBarComponent,
    MapComponent,
    MarbleComponent,
    DashboardContentComponent,
    ListComponent,
    ArrowComponent,
    UsageContainerComponent,
    SwitchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
