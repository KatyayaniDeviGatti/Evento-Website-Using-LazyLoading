import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';



export const routes: Routes = [
  {
    path:'',component:MainComponent
  },
  {
    path:'users',
    loadChildren:()=> import('../app/users/users.module').then(
      module => module.UsersModule
    )
  },
  {
    path:'event',
    loadChildren:()=>import('../app/event/event.module').then(
      module => module.EventModule
    ),
   
  }
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
