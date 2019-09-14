import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/_services/customer.service';
import { Customer } from 'src/app/_models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerId:string;
  customers:any;

  constructor(private route: ActivatedRoute, private customerServ:CustomerService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:any) => {
        this.customerId = params.id;
      } 
    );
    this.getSingleCustomer(this.customerId);
  }

  getSingleCustomer(customerId){
    this.customerServ.getSingleCust(customerId).subscribe(
      (data:any) => {
        this.customers = data.customer;
        console.log(this.customers);
      }
    );
  }

}
