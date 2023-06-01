import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';

const routes: Routes = [
  {
    component: DashboardContentComponent,
    path: '',
  },
  {
    component: MapComponent,
    path: 'map'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
