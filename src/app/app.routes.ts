import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  HomeComponent,
  ProductComponent,
} from "./components/index.paginas";

const app_routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
