import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LazyloadingService } from 'src/app/lazyloading.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone:true,
  imports:[CommonModule,NavbarComponent,FooterComponent,ScrollingModule]
})
export class ServicesComponent {

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
