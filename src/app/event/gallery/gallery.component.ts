import {  ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LazyloadingService } from 'src/app/lazyloading.service';




@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone:true,
  imports:[CommonModule,LazyLoadImageModule,ScrollingModule]
})
export class GalleryComponent {

  ngOnInit(){
    this.getData()
  }
  services:any=[]
  constructor(private lazy:LazyloadingService){}
  getData(){
     this.lazy.getServicesData().subscribe(
       (data:any)=>{
        console.log(data)
        this.services = data
        console.log(this.services)
       }
     )
  }
  
  
}
