import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminGuardGuard } from '../_guards/superAdmin/super-admin-guard.guard';

import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { CustomersComponent } from './customers/customers.component';
import { StaffsComponent } from './staffs/staffs.component';
 
const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [SuperAdminGuardGuard],
    children: [
      {path:'', component: Dashboard1Component},
      {path:'1', component: Dashboard1Component},
      {path:'customers', component: CustomersComponent},
      {path:'staffs', component: StaffsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
