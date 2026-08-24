import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ThirdPCompoComponent } from '../third-pcompo/third-pcompo.component';
import { ManagepolicyComponent } from './managepolicy/managepolicy.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'ThirdParty',component:ThirdPCompoComponent},           // write for just lazy loading
  {path:'manage',component:ManagepolicyComponent},              // dosent work here this is path of component manage
]

@NgModule({
  declarations: [
    ManagepolicyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  

  ]
})
export class ThirdPartyModuleModule { }
