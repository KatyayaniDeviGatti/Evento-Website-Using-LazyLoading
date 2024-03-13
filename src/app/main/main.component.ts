import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
 
})
export class MainComponent {

  constructor(private route:Router){}
  loginUser(){
      this.route.navigateByUrl('users/login')
  }

  onRegister(){
      this.route.navigateByUrl('users/register')
  }

}
