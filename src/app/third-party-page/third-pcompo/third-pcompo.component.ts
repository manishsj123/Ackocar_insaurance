import { Component } from '@angular/core';

@Component({
  selector: 'app-third-pcompo',
  templateUrl: './third-pcompo.component.html',
  styleUrls: ['./third-pcompo.component.css']
})
export class ThirdPCompoComponent {

  public sampleText:string="";
  public PassageHeading: string = "";
  public link:any;

goto(){
    this.link="manage"
  }
  
}
