import { Component, NgModule } from "@angular/core";
import { ComponentFixture, TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { Router, RouterLinkWithHref } from "@angular/router";
import { AppRoutingModule, routes } from "./app-routing.module";
import { RouterTestingModule } from "@angular/router/testing";
import { Location } from "@angular/common";
import { By } from "@angular/platform-browser";
import { MainComponent } from "./main/main.component";
import { UsersModule } from "./users/users.module";
import { RegisterComponent } from "./users/register/register.component";
import { LoginComponent } from "./users/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { ServicesComponent } from "./event/services/services.component";
import { NavbarComponent } from "./event/navbar/navbar.component";
import { AboutUsComponent } from "./event/about-us/about-us.component";
import { FooterComponent } from "./event/footer/footer.component";
import { GalleryComponent } from "./event/gallery/gallery.component";
import { HomeComponent } from "./event/home/home.component";
import { PriceComponent } from "./event/price/price.component";


describe('Maincomponent',()=>{
    let component:MainComponent;
    let fixture:ComponentFixture<MainComponent>;

    let appComponent:AppComponent;
    let appFixture:ComponentFixture<AppComponent>;

    let objRouter:Router;
    let location:Location;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[RegisterComponent,LoginComponent,ServicesComponent,NavbarComponent,AboutUsComponent,FooterComponent,GalleryComponent,HomeComponent,MainComponent,PriceComponent],
            imports:[AppRoutingModule,RouterTestingModule.withRoutes(routes),HttpClientModule],
            providers:[NgModule]
        })
        .compileComponents()
    }));

    beforeEach(()=>{
        objRouter = TestBed.inject(Router);
        location = TestBed.inject(Location);

        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges()

        appFixture = TestBed.createComponent(AppComponent);
        appComponent = appFixture.componentInstance;
        objRouter.initialNavigation();

    });

    // it("unit test case for default route",async(()=>{
    //     appFixture.detectChanges();
    //     appFixture.whenStable().then(()=>{
    //         expect(location.path()).toEqual('/')
    //     })
    // }))
    it('Lazy loading routing test case',fakeAsync(()=>{
        const lazyloader = TestBed.inject(NgModule)
        lazyloader.stubbedModules = {lazymodule:UsersModule};

        objRouter.navigateByUrl('/users');
        tick();
        fixture.detectChanges();
        expect(location.path()).toBe('/users')
    }))
    

})