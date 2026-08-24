import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { Compo3Component } from './compo3/compo3.component';
import { Guard01Component } from './For Guard New/guard01/guard01.component';
import { ServiPostUpdateDeleteComponent } from './servi-post-update-delete/servi-post-update-delete.component';
import { ServiceComponent } from './service/service.component';
import { ManagepolicyComponent } from './third-party-page/third-party-module/managepolicy/managepolicy.component';
import { ThirdPCompoComponent } from './third-party-page/third-pcompo/third-pcompo.component';
 
const routes: Routes = [
  
  {path:'compo2',component:Compo2Component},
  {path:'compo3',component:Compo3Component},
  {path:'service',component:ServiceComponent},
  {path:'ServiPostUpdateDelete',component:ServiPostUpdateDeleteComponent},
  {path:'Guard01',component:Guard01Component},
  {path:'ThirdParty',component:ThirdPCompoComponent},
  {path:'manage',component:ManagepolicyComponent},

  {path:'ThirdPartyModule',loadChildren:()=>import('./third-party-page/third-party-module/third-party-module.module').then(mod=>mod.ThirdPartyModuleModule)},
  
  



  // {path:'**', redirectTo:'compo1'},
  {path:'**',component:Compo1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
