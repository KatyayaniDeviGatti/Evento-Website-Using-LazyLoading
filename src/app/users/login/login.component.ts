import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LazyloadingService } from 'src/app/lazyloading.service';
import {FocusMonitor,ListKeyManager} from '@angular/cdk/a11y'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,FormsModule]
})
export class LoginComponent {

  authError:string = ''
  loginObj={
    "UserName":"",
    "Password":""
  }
  constructor(private route:Router,private lazy:LazyloadingService,private focusMonitor:FocusMonitor ){
   
  }
  onRegister(){
    this.route.navigateByUrl('users/register')
  }
  
  OnLogin(){
    this.lazy.validateUser(this.loginObj.UserName,this.loginObj.Password).subscribe(
      (data:any)=>{
        if(data.length > 0){
            console.log(data)
            this.clearForm()
            this.route.navigateByUrl("event/home")
        }
        else{
          this.authError = "Please Enter Correct Credentials"
          console.log("Wrong Credentials")
          this.clearForm()
        }
      }
    )
}

clearForm(){
  this.loginObj={
    UserName : '',
    Password : ''
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
