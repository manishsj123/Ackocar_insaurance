import { Component } from '@angular/core';
import { SerpostDeleteService } from './Service-Post-Update-Delete Service file/serpost-delete.service';

@Component({
  selector: 'app-servi-post-update-delete',
  templateUrl: './servi-post-update-delete.component.html',
  styleUrls: ['./servi-post-update-delete.component.css']
})
export class ServiPostUpdateDeleteComponent {

  APIData:any;
  data:any;
  public link2:any ="";

  constructor ( private myService:SerpostDeleteService){ 

  }

  ngOnInit(){
    this.get1stDataFromAPI();
    this.sendDatatoBackEnd();
    this.update3rdAPIData();
    this.link2="https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Policy-Terms-and-Conditions.pdf";

  }

  get1stDataFromAPI(){
    this.myService.getAPIdata().subscribe(
      (res)=>{
        console.log(res);
        this.APIData=res;
        this.APIData=this.APIData.data;
        console.log(this.APIData);

      },
    
      (err)=>{
        console.log(err);
      }
    )
  }

sendDatatoBackEnd(){
  this.data={
    name:"shwetaa",
    Age:24,
    Department:"Electronics",
    Aim:"Developer"
  }

this.myService.sendAPIdata(this.data).subscribe(
  (res)=>{
    console.log(res);
 },
 (err)=>{
  console.log(err);
 }

)


}

update3rdAPIData(){
 this.data={
  name:"shreee",
  age:1,
  Department:"childish",
  Aim:" To play the games"
 }

 this.myService.updateAPIdata(this.data).subscribe(
  (res)=>{
    console.log(res);
  },
  (err)=>{
    console.log(err);
  }
 )
  
}

delete4thAPIdata(){

  this.myService.deleteAPIdata(this.data).subscribe(
    (res)=>{
      console.log(res);
    },
    (err)=>{
      console.log(err);
    }
  )
}

// ngOnInit(): void{
//  this.link2="https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Policy-Terms-and-Conditions.pdf";

// }



}
