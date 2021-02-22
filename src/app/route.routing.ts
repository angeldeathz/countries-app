import { Routes, RouterModule } from '@angular/router';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { HomeComponent } from './countries/pages/home/home.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ViewCountryComponent } from './countries/pages/view-country/view-country.component';

const routes: Routes = [
  {  
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "regions",
    component: ByRegionComponent,
  },
  {
    path: "capitals",
    component: ByCapitalComponent,
  },
  {
    path: "countries",
    component: ByCountryComponent,
  },
  {
    path: "country/:id",
    component: ViewCountryComponent,
  },
  {
    path: "**",
    redirectTo: ""
  }
];

export const RoutesApp = RouterModule.forRoot(routes);
