import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {
  
  constructor(private _http:HttpClient) { }

  getStates():Observable<any[]>{
    return this._http.get<any[]>(environment.baseUrl + 'states');
  }
}
