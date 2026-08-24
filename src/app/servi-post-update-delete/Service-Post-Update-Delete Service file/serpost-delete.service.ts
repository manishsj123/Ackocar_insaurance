import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerpostDeleteService {

  constructor( private http:HttpClient) { 

  }

 getAPIdata(){
  return this.http.get("https://reqres.in/api/users?page=2");
 }

sendAPIdata(dt:any){
  return this.http.post("https://reqres.in/api/users",dt);
}
 
updateAPIdata(dt1:any){
  return this.http.put("https://reqres.in/api/users/2",dt1);
}

deleteAPIdata(dt2:any){
  return this.http.delete("https://reqres.in/api/users/",dt2)
}

}
