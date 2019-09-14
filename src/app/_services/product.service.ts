import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  getAllProd(sort, page):Observable<any[]>{ 
      return this._http.get<any[]>(environment.baseUrl + 'products' + '?sort=' + sort + '&page=' + page);
  }
  getAllCategory():Observable<any[]>{ 
    return this._http.get<any[]>(environment.baseUrl + 'categories');
  }
  getAllBrand():Observable<any[]>{ 
    return this._http.get<any[]>(environment.baseUrl + 'brands');
  }

  getSingleProd(productId:String):Observable<any[]>{
    return this._http.get<any[]>(environment.baseUrl + 'products/' + productId);
  }

  createProd(formData:any):Observable<any>{
    let httpheaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = {
      headers:httpheaders 
    };
    return this._http.post<any>(environment.baseUrl + 'products/', formData, options);
  }

  deleteProd(productId:String):Observable<any[]>{
    return this._http.delete<any[]>(environment.baseUrl + 'products/' + productId);
  }

  updateProd(productId, updateProduct):Observable<any>{
    let httpheaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = {
      headers:httpheaders 
    };
    return this._http.patch<any>(environment.baseUrl + 'products/' + productId, updateProduct, options);
  } 
}
 