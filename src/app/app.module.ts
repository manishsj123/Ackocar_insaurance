import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { ServiceComponent } from './service/service.component';
import { HttpClientModule} from '@angular/common/http';
import { Compo3Component } from './compo3/compo3.component';
import { ServiPostUpdateDeleteComponent } from './servi-post-update-delete/servi-post-update-delete.component';
import { Guard01Component } from './For Guard New/guard01/guard01.component';
import { CardComponent } from './card/card.component';
import { ThirdPCompoComponent } from './third-party-page/third-pcompo/third-pcompo.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Compo2Component,
    ServiceComponent,
    Compo3Component,
    ServiPostUpdateDeleteComponent,
    Guard01Component,
    CardComponent,
    ThirdPCompoComponent,
    HomeComponent,
    SidebarComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
