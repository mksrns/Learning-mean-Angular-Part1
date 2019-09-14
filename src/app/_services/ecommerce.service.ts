import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor(private _http: HttpClient) { }

  // getAllCat():Observable<any>{
  //   // return this._http.get<any[]>('https://www.flipkart.com/lc/getData?dataSourceId=quickLinksDS_1.0&t=26128899');
  // }
}
