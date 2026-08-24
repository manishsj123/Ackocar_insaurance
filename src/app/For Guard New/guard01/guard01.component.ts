import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guard01',
  templateUrl: './guard01.component.html',
  styleUrls: ['./guard01.component.css']
})
export class Guard01Component {

card:any;


  constructor(private route: Router) {

  }

   cardData:any=[
    { img:'../../../assets/imges/RaiseClameimg.jpg'}
   ]





}
