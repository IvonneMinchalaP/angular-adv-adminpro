import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule} from  '@angular/router'
import { FormsModule } from '@angular/forms';

import { BaseChartDirective  } from 'ng2-charts';
//Modulos
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
  declarations: [
    DashboardComponent, 
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  exports:[
    DashboardComponent, 
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    BaseChartDirective,
    RouterModule,
    FormsModule,
    ComponentsModule,
    
  ]
})
export class PagesModule { }
