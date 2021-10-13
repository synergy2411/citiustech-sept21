import { Location } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from "./app.component"
import { APP_ROUTES } from "./app.routes";
import { HomeComponent } from "./components/home/home.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"
import { ProductsComponent } from "./components/products/products.component"

describe("App Routes", () => {
  let fixture : ComponentFixture<AppComponent>;
  let component : AppComponent;
  let router : Router;
  let location : Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations :  [AppComponent, HomeComponent, ProductsComponent, PageNotFoundComponent],
      imports :       [
        RouterTestingModule.withRoutes(APP_ROUTES)
       ]
    }).compileComponents()
  })

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation()
  })

  it("Should navigate to /home", async () => {
    fixture.detectChanges()
    router.navigate([''])
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(location.path()).toBe("/home")
    })
  })

  it("Should create App", () =>{
    expect(component).toBeTruthy()
  })

})
