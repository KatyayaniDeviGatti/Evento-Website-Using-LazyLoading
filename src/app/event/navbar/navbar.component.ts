import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone:true,
  imports:[CommonModule,RouterOutlet,RouterModule]
})
export class NavbarComponent {

  constructor(private route:Router){}

  logout(){
      this.route.navigateByUrl("/")
  }

}
