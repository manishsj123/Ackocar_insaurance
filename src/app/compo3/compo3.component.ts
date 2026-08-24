import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.css']
})
export class Compo3Component {

  @ Input() compo1Data:any;

  @ Output() itemEvent= new EventEmitter<any>();

  dataFromCompo2toCompo1:any;

  constructor(){
    this.dataFromCompo2toCompo1="this is data from compo2(child) to compo1(parent)";
  }
  ngOnInit(): void {
  }

  sendDataFromcompo1(){
    console.log("hello this is from compo1");
    this.itemEvent.emit(this.dataFromCompo2toCompo1);
  }

}
