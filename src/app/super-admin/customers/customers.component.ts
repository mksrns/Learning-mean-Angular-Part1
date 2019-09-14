import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../../_services/customer.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Customer } from '../../_models/customer';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { CommonServicesService } from 'src/app/_services/common-services.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:any[];
  displayedColumns: string[] = ['no.', 'name', 'contact', 'address', 'edit', 'delete'];
  myControl = new FormControl();
  isDeleted:boolean = false;
  isAddedcustomer:boolean = false;
  isUpdatedCustomer:boolean = false;
  isCustomer:boolean = false;
  loading:boolean = true;
  addCustomerForm:FormGroup;
  updateCustomerForm:FormGroup;
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  /* fileUpload = { status: '', message:'', filepath:''};
  error:string; */

  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private formbuilder: FormBuilder, private customerServ:CustomerService, private commonServ:CommonServicesService) { }

  

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.getAllCustomers();
    this.getStates();
    this.addCustomerForm = this.formbuilder.group({ 
      firstname:['', [Validators.required]],
      lastname: ['', []],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      street: ['', []],
      city: ['', []],
      state: ['', []],
      pincode: ['', []],
      tel1: ['', []],
      tel2: ['', []],
      email: ['', []],
      customerImage: ['']
    });

    this.updateCustomerForm = this.formbuilder.group({ 
      firstname:['', []],
      lastname: ['', []],
      username: ['', []],
      password: ['', []],
      street: ['', []],
      city: ['', []],
      state: ['', []],
      pincode: ['', []],
      tel1: ['', []],
      tel2: ['', []],
    });
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  onAddCustomer(){
    let newCustomer = this.addCustomerForm.value;
    this.addCustomer(newCustomer);
    /* 
    const formData = new FormData();
    formData.append('email', this.addCustomerForm.get('email').value);
    formData.append('email', this.addCustomerForm.get('email').value);
    formData.append('customerImage', this.addCustomerForm.get('customerImage').value);

    this.addCustomer(formData); */
  }

  addCustomer(newCustomer){
    this.customerServ.createCust(newCustomer).subscribe(
      (data:any)=>{
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'New Customer Added',
          showConfirmButton: false,
          timer: 1500
        });
        this.isAddedcustomer = true;
        this.getAllCustomers();
    },
      error=>{
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }
    );
  }
 
  onUpdateFunction(customerId: string){
    let updateCustomer = this.updateCustomerForm.value;
    this.updateCustomer(customerId, updateCustomer);
  }
  updateCustomer(customerId, updateCustomer){
    this.customerServ.updateCust(customerId, updateCustomer).subscribe(
      (data:any) => {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Customer Updated',
          showConfirmButton: false,
          timer: 1500
        });
        this.isUpdatedCustomer = true;
        this.getAllCustomers();
      },
      error=>{
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }
    );
  }
  getStates(){
      return this.commonServ.getStates().subscribe((data:any)=>{
        for(let i=0;i<8;i++){
          this.options.push(data[i].state);
        }
        console.log(this.options);
      });
  }

  getAllCustomers(){ 
    return this.customerServ.getAll().subscribe(
      (data:any) => {
        this.customers = data.customer;
        console.log(this.customers);
        this.dataSource = new MatTableDataSource(this.customers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loading = false;
      },
      error => {
        this.isCustomer = true;
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  onDeleteFunction(customerId: string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.deleteCustomer(customerId);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getAllCustomers();
      }
    })
    
  }

  deleteCustomer(customerId: string){
    return this.customerServ.deleteCust(customerId).subscribe(
      (data:any) => {
        console.log(data);
        //this.isDeleted = true;
      },
      error => {
        console.log(error);
      }
    );
  }
}

