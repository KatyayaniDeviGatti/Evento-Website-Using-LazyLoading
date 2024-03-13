import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
   {
    path:'',
    loadComponent:()=> import('../event/main/main.component').then(
      component => component.MainComponent
    ),
    children:[
      { 
        path:'home',
        loadComponent:()=> import('../event/home/home.component').then(
          Component => Component.HomeComponent
        )

      },
      {
        path:'services',
        loadComponent:()=> import('../event/services/services.component').then(
          Component => Component.ServicesComponent
        )
      },
      {
        path:'about-us',
        loadComponent:() => import('../event/about-us/about-us.component').then(
          Component => Component.AboutUsComponent
        )
      },
      {
        path:'gallery',
        loadComponent:()=> import('../event/gallery/gallery.component').then(
          Component=> Component.GalleryComponent
        )
      },
      {
        path:'price',
        loadComponent:()=> import('../event/price/price.component').then(
          Component=> Component.PriceComponent
        )
      }
    ]
   },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
