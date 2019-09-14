import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { BijakService } from 'src/app/_services/bijak.service';

@Component({
  selector: 'app-bijak',
  templateUrl: './bijak.component.html',
  styleUrls: ['./bijak.component.css']
})
export class BijakComponent implements OnInit {
  bijakForm:FormGroup;
  bijakData: any;
  showTable:boolean = false;
  totalRow: number;

  constructor(private formbuilder: FormBuilder, private bijakServ: BijakService) { }

  ngOnInit() {
    this.bijakForm = this.formbuilder.group({ 
      no:['', [Validators.required]],
      dataOfReciept: ['', []],
      ms: ['', []],
      city: ['', []],
      truckNo: ['', []],
      dispatchDate: ['', []],

      truckFreight: ['', []],
      railFreight: ['', []],
      stationMandiExp: ['', []],
      unloading:['', []],
      postage: ['', []],
      phone:['', []],
      coldStorage:['', []],
      loading:['', []],
      charity:['', []],

      itemRows: this.formbuilder.array([this.initItemRow()])
    });
  } 
  initItemRow(){
    return this.formbuilder.group({
      sno:[''],
      description:[''],
      ctnKg:[''],
      rate:[''],
      itemAmount:['']
    });
  }
  addNewRow(){
    const control = <FormArray>this.bijakForm.controls['itemRows'];
    control.push(this.initItemRow());
  }
  deleteRow(index: number){
    const control = <FormArray>this.bijakForm.controls['itemRows'];
    if(control != null){
      this.totalRow = control.value.length;
    }
    if(this.totalRow > 1){
      control.removeAt(index);
    } else {
      alert('One record Mandatory');
      return false;
    }
  }
  onCreateFunction(){
    this.bijakData = this.bijakForm.value;
    //this.showTable = false;
    //this.bijakData.itemRows.itemAmount = this.bijakData.itemRows.ctnKg * this.bijakData.itemRows.price;
    console.log(this.bijakData);  

    this.sendBijakData(this.bijakData);
    //this.invoice.sendInvoiceData(this.invoiceData);
    //this.showInvoice = true;
  }

  sendBijakData(bijakData){
    return this.bijakServ.createBijak(bijakData).subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }


}
