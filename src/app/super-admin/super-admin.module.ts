import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as $ from 'jquery';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { StaffsComponent } from './staffs/staffs.component';
import { SuperAdminService } from '../_services/superAdmin/super-admin.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
 

@NgModule({
  declarations: [LoginComponent, DashboardComponent, CustomersComponent, StaffsComponent, Dashboard1Component],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ],
  providers: [SuperAdminService]
})
export class SuperAdminModule { }
