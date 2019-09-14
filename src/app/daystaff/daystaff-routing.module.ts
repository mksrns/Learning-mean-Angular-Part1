import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayStaffGuard } from '../_guards/day-staff.guard';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BijaksComponent } from './bijaks/bijaks.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [DayStaffGuard],
    children: [
      {path:'', component: Dashboard1Component},
      {path:'1', component: Dashboard1Component},
      {path:'invoice', component: InvoiceComponent},
      {path:'bijaks', component: BijaksComponent},
      {path:'products', component: ProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaystaffRoutingModule { }
