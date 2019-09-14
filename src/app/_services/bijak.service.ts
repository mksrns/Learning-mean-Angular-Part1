import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BijakService {

  private _bijakDataSource = new BehaviorSubject<any>('Default');
  bijakData$ = this._bijakDataSource.asObservable();

  sendBijakData(bijakData: any){
    this._bijakDataSource.next(bijakData);
  }

  constructor(private _http:HttpClient ) { } 
  
  getAll(page:number):Observable<any[]>{
    return this._http.get<any[]>(environment.baseUrl + 'bijaks?page=' +page);
  }
  getSingle(bijakId: String):Observable<any[]>{
    return this._http.get<any[]>(environment.baseUrl + 'bijaks/' + bijakId);
  }
  createBijak(formData:any):Observable<any>{
    let httpheaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = {
      headers:httpheaders 
    };
    return this._http.post<any>(environment.baseUrl + 'bijaks/', formData, options);
  }
  
  deleteBijak(bijakId:String):Observable<any[]>{
    return this._http.delete<any[]>(environment.baseUrl + 'bijaks/' + bijakId);
  }

  //for search practice
  getAllPosts():Observable<any[]>{
    return this._http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
