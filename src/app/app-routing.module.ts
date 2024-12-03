import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes =[
    //path:'/dasboard' PagesRouting
    //path:'/auth' AuthRouting

    {path: '**', component: NopagefoundComponent },
    {path: '', redirectTo: '/dashboard', pathMatch:'full' },

];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
