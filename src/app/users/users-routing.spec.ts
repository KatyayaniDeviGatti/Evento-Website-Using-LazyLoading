// import { Component, NgModule } from "@angular/core";
// import { ComponentFixture, TestBed, async, fakeAsync, tick } from "@angular/core/testing";
// import { Router, RouterLinkWithHref } from "@angular/router";

// import {HttpClientTestingModule} from '@angular/common/http/testing'
// import { AppRoutingModule,routes } from "../app-routing.module";
// import { RouterTestingModule } from "@angular/router/testing";
// import { Location } from "@angular/common";
// import { By } from "@angular/platform-browser";
// import { MainComponent } from "../main/main.component";
// import { UsersModule } from "./users.module";
// import { LoginComponent } from "./login/login.component";
// import { RegisterComponent } from "./register/register.component";
// import { ServicesComponent } from "../event/services/services.component";
// import { AboutUsComponent } from "../event/about-us/about-us.component";
// import { HttpClientModule } from "@angular/common/http";


// describe('header component',()=>{
//     let component:MainComponent;
//     let fixture:ComponentFixture<MainComponent>

//     let objRouter:Router;
//     let location:Location;

//     beforeEach(async(()=>{
//         TestBed.configureTestingModule({
//             declarations:[LoginComponent,RegisterComponent],
//             imports:[AppRoutingModule,RouterTestingModule.withRoutes(routes),HttpClientModule,HttpClientTestingModule],
//             providers:[NgModule]
//         })
//         .compileComponents()
//     }));

//     beforeEach(()=>{
//         objRouter = TestBed.inject(Router);
//         location = TestBed.inject(Location);

//         fixture = TestBed.createComponent(MainComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges()

//         objRouter.initialNavigation();

//     });

//     it('Lazy loading routing test case',fakeAsync(()=>{
//         const lazyloader = TestBed.inject(NgModule)
//         lazyloader.stubbedModules = {lazymodule:UsersModule};

//         objRouter.navigateByUrl('/users');
//         tick();
//         fixture.detectChanges();
//         expect(location.path()).toBe('/users')
//     }))
    

// })