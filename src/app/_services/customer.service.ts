import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { superAdmin } from '../_models/superAdmin';
import { Router } from '@angular/router';
import { Customer } from '../_models/customer';
import { SuperAdminService } from './superAdmin/super-admin.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient, private superAdminServ:SuperAdminService) { }

  getAll():Observable<Customer[]>{ 
      return this._http.get<Customer[]>(environment.baseUrl + 'customers');
 }

  getSingleCust(customerId:String):Observable<Customer[]>{
    return this._http.get<Customer[]>(environment.baseUrl + 'customers/' + customerId);
  }

  createCust(formData:any):Observable<any>{
    let httpheaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = {
      headers:httpheaders 
    };
    return this._http.post<any>(environment.baseUrl + 'customers/', formData, options);
  }
  
  deleteCust(customerId:String):Observable<Customer[]>{
    return this._http.delete<Customer[]>(environment.baseUrl + 'customers/' + customerId);
  }
 
  updateCust(customerId, updateCustomer):Observable<Customer>{
    let httpheaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = {
      headers:httpheaders 
    };
    return this._http.patch<Customer>(environment.baseUrl + 'customers/' + customerId, updateCustomer, options);
  } 

}
 