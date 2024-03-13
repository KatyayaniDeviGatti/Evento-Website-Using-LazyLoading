import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LazyloadingService } from 'src/app/lazyloading.service';
import { FocusMonitor, ListKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class RegisterComponent {

  RegisterObj={
    "FirstName":"",
    "LastName":"",
    "PhoneNumber":"",
    "UserName":"",
    "Password":""
  }
  constructor(private route:Router,private lazy:LazyloadingService,private focusMonitor:FocusMonitor){}
  loginUser(){
    this.route.navigateByUrl('users/login')
}

postRegisterData(){
   this.lazy.postRegisterData(this.RegisterObj).subscribe(
    (data:any)=>{
      console.log(data)
      this.clearForm()
    }
   )
}

clearForm(){
  this.RegisterObj={
    "FirstName":"",
    "LastName":"",
    "PhoneNumber":"",
    "UserName":"",
    "Password":""
  }
}

keyManager:any;
@ViewChild('formElement') element:ElementRef | any;

@ViewChildren('formElementChild') elementChild:QueryList<any> | any

@HostListener('window:keyup',['$event'])
keyFunc(event:any){
  if(event.code !== 'Tab'){
    this.keyManager.onKeydown(event)
    this.focusMonitor.focusVia(this.keyManager.activeItem.nativeElement,"keyboard")
  }
  else{
    this.keyManager.onKeydown(event)
    this.keyManager.setNextItemActive()
  }
}


ngOnInit(): void {
  
}

ngAfterViewInit(){
  this.keyManager = new ListKeyManager(this.elementChild);
  this.keyManager.withHorizontalOrientation('ltr');
  this.keyManager.withWrap()
}
}
