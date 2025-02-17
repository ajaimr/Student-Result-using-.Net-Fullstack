import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  constructor(private http:HttpClient) { }
  url:any="https://localhost:7002/api/student";
  create(val:any):Observable<any>
  {
   return this.http.post(this.url,val);
  } 
  url2:any="https://localhost:7002/api/admin";
  urladmin:any="https://localhost:7002/api/addStudent";
  create2(val:any):Observable<any>
  {
   return this.http.post(this.url2,val);
  } 
  getAll():Observable<any>{
    return this.http.get(this.url2);
  }
  getAll2():Observable<any>{
    return this.http.get(this.urladmin);
  }
  add_data(data:any):Observable<any>{
    return this.http.post(this.urladmin,data);
  }
  get_data_admin():Observable<any>{
    return this.http.get(this.urladmin);
  }
  update(data:any,id:any):Observable<any>{
    return this.http.put(this.urladmin+'/'+id,data);
  }
  delete(id:any):Observable<any>{
    return this.http.delete(this.urladmin+'/'+id);
  }
  getById(id:any):Observable<any>{
    return this.http.get(this.urladmin+'/'+id);
  }
}
