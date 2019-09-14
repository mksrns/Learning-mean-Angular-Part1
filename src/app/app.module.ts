import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { httpInterceptorProviders } from '../app/_helpers/index';
import { SingleCustomerComponent } from './single-customer/single-customer.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CustomerComponent } from './_commonComponents/customer/customer.component';
import { SearchPageComponent } from './_components/search-page/search-page.component';
import { EcommerceModule } from './ecommerce/ecommerce.module';
//import { BijakTemplateComponent } from './_commonComponents/bijak-template/bijak-template.component';
//import { BijakComponent } from './_commonComponents/bijak/bijak.component';
//import { InvoiceFormComponent } from './_commonComponents/invoice-form/invoice-form.component';
//import { InvoiceTemplateComponent } from './_commonComponents/invoice-template/invoice-template.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomepageComponent,
    SingleCustomerComponent,
    CustomerComponent,
    SearchPageComponent,
    //BijakTemplateComponent,
    //BijakComponent,
    //InvoiceFormComponent
    //InvoiceTemplateComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EcommerceModule,
    AngularMaterialModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
