import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from 'src/app/_services/invoice.service';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  //showInvoice:boolean = false;
  invoiceForm:FormGroup;
  invoiceData: any;

  constructor(private formbuilder: FormBuilder, private invoice: InvoiceService) { } 

  ngOnInit() {

    this.invoiceForm = this.formbuilder.group({ 
      firstname:['', [Validators.required]],
      lastname: ['', []],
      street: ['', []],
      city: ['', []],
      state: ['', []],
      tel1: ['', []],
    });
  }

  onCreateFunction(){
    this.invoiceData = this.invoiceForm.value;
    this.invoice.sendInvoiceData(this.invoiceData);
    //this.showInvoice = true;
  }

}
