import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private _invoiceDataSource = new BehaviorSubject<any>('Default');
  invoiceData$ = this._invoiceDataSource.asObservable();

  constructor() { }

  sendInvoiceData(invoiceData: any){
    this._invoiceDataSource.next(invoiceData);
  }

}
