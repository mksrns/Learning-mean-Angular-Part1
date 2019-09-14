import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HomepageComponent } from './ecommerce/homepage/homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import * as $ from 'jquery';
import { CustomerComponent } from './_commonComponents/customer/customer.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {
    path:'super-admin',
    loadChildren:'./super-admin/super-admin.module#SuperAdminModule'
  },
  {
    path:'daystaff',
    loadChildren:'./daystaff/daystaff.module#DaystaffModule'
  },
  {path:'customer/:id' , component: CustomerComponent},
  
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
