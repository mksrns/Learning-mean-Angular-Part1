import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { InvoiceService } from 'src/app/_services/invoice.service';

@Component({
  selector: 'app-invoice-template',
  templateUrl: './invoice-template.component.html',
  styleUrls: ['./invoice-template.component.css']
})
export class InvoiceTemplateComponent implements OnInit {
  public orderStatus:string = "Pending";
  message: string;
  invoiceData: any;
  

  constructor(private invoice: InvoiceService) { }

  ngOnInit() {

    //jquery
    $(function(){
      if($('.order-status').html().toLowerCase() == 'pending'){
        $('.order-status').addClass('bg-warning');
      } else {
        $('.order-status').addClass('bg-success');
      }
    });
    // this.invoice.getData().subscribe(data=>{
    //   console.log(data);
    // });
    this.open();
    console.log(this.invoiceData);
  }
  open(){
    this.invoice.invoiceData$.subscribe((data: any) => {
      this.invoiceData = data;
    });
  }

}
