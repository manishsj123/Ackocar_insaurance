
import { Component, OnInit} from '@angular/core';
import { LoginService } from './login.service';
import { Form1Service } from './form1.service';

@Component({
  selector: 'app-managepolicy',
  templateUrl: './managepolicy.component.html',
  styleUrls: ['./managepolicy.component.css']
})
export class ManagepolicyComponent   {

public userdata:any;
public alldata:any=[];
public idd:any;
public nm:any;
public ad:any;
public ph:any;
public ss:any;
public hs:any;


constructor(private fs:Form1Service){
 this.getalldata();
}

submituserdata(data : any){
  this.fs.postdata(data.value).subscribe(
    ((res:any)=>{
      console.log(res);
    }),
    ((err:any)=>{
      console.log(err);
    })
  )
}
 
getalldata(){
  this.fs.getdata().subscribe(
    ((res:any)=>{
      console.log(res);
      this.userdata=res;
    }),
    ((err:any)=>{
      console.log(err);
    })
  )
}

ondelete(dt3:any){
  this.fs.deletedata(dt3.id).subscribe(
    ((res:any)=>{
      console.log(res);
      this.getalldata();
    }),
    ((err:any)=>{
      console.log(err);
    })
  )
}

onupdate(dt4:any){
  this.idd=dt4.id;
  this.nm=dt4.name;
  this.ad=dt4.address;
  this.ph=dt4.phone;
  this.ss=dt4.ssc;
  this.hs=dt4.hsc;
}

onupdatebtn(dt5:any){
  this.fs.updatedata(dt5.value).subscribe(
    ((res:any)=>{
      console.log(res);
      this.getalldata();
    }),
    ((err:any)=>{
      console.log(err);
    })
  )
}
}