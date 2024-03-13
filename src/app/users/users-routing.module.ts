import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path:'login',
    loadComponent:()=>import('../users/login/login.component').then(
      Component => Component.LoginComponent
    )
  },
  {
    path:'register',
    loadComponent:()=>import('../users/register/register.component').then(
      Component => Component.RegisterComponent
    )
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
