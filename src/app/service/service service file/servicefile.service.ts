import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicefileService {

  constructor(private http:HttpClient) { }

  getBackEndData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
