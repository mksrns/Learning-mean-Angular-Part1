import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as $ from 'jquery';

import { DayStaffService } from '../_services/dayStaff/day-staff.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { DaystaffRoutingModule } from './daystaff-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceTemplateComponent } from '../_commonComponents/invoice-template/invoice-template.component';
import { InvoiceFormComponent } from '../_commonComponents/invoice-form/invoice-form.component';
import { BijakComponent } from '../_commonComponents/bijak/bijak.component';
import { BijakTemplateComponent } from '../_commonComponents/bijak-template/bijak-template.component';
import { BijaksComponent } from './bijaks/bijaks.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    LoginComponent, 
    DashboardComponent, 
    Dashboard1Component, 
    InvoiceComponent,
    InvoiceFormComponent,
    InvoiceTemplateComponent,
    BijakComponent,
    BijakTemplateComponent,
    BijaksComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    DaystaffRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule 
  ],
  providers: [DayStaffService]
})
export class DaystaffModule { }
