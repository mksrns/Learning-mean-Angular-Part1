import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { DayStaff } from '../../_models/day-staff';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DayStaffService {
  currentDayStaff:String; 
  redirectUrl:String;
  constructor(private router:Router, private _http:HttpClient) { }

  login(dayStaff:DayStaff):Observable<DayStaff>{
  
    let httpheaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = {
      //withCredentials:true,
      headers:httpheaders
    };
    return this._http.post<DayStaff>(environment.baseUrl + 'dayStaffs/login', dayStaff, options);
  
  }
  getAuthorizationToken(){
    const currentDayStaff = JSON.parse(localStorage.getItem('currentDayStaff'));
    return currentDayStaff;
  }

  isLoggedIn(){
    if(localStorage.getItem('currentDayStaff')){
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('currentDayStaff');
    this.router.navigate(['/daystaff']);
  }
}
