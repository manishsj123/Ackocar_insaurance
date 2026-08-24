import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component {

  dataFromCompo1toCompo2: any;
  dataFromCompo2toCompo1: any;


  constructor(private route: Router) {

    this.dataFromCompo1toCompo2 = "This is from compo1 to compo2"
  }

  ngOnInit(): void {
  }


  emitDataFromcompo2(ev: any) {
    console.log("this is custom event");
    console.log(ev);
    this.dataFromCompo2toCompo1 = ev;
  }





}
