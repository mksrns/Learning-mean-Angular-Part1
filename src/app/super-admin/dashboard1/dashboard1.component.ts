import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {
  count: any;

  constructor(private customerServ:CustomerService) { }

  ngOnInit() {
    this.getCustomerCount();
  }

  getCustomerCount(){
    this.customerServ.getAll().subscribe(
      (data:any) => {
        this.count = data.count;

      }
    );
  }

}
