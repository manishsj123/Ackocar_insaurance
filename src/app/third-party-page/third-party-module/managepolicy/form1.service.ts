import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Form1Service {

  constructor(private http:HttpClient){
  }

getdata(){
  return this.http.get("http://localhost:3000/carinfo")

}

postdata(dt1 : any){
  return this.http.post("http://localhost:3000/carinfo",dt1);
}

deletedata(id : any){
  return this.http.delete("http://localhost:3000/carinfo/"+id);
}

updatedata(dt2 : any){
  return this.http.put("http://localhost:3000/carinfo/"+dt2.id,dt2);
}


}
