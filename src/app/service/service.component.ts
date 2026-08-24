import { Component } from '@angular/core';
import { ServicefileService } from './service service file/servicefile.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  DataStorableVariable:any;

  constructor( private myService:ServicefileService) { 

  }

  ngOnInit(){
    this.reciveDataFromBackEnd();

  }
 
  reciveDataFromBackEnd(){
    this.myService.getBackEndData().subscribe(
      (res)=>{
        console.log(res);
        this.DataStorableVariable=res;
      },
      (err)=>{
        console.log(err);
      }
      )
      
  }






}
