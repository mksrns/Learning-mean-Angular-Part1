import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SingleProductComponent } from './single-product/single-product.component';


@NgModule({
  declarations: [HomepageComponent, SingleProductComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
