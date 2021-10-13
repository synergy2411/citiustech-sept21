import { Location } from "@angular/common";
import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
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
  let de : DebugElement;

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
    de = fixture.debugElement;
    router.initialNavigation()
  })

  it("Should navigate to /product-detail from /product on li:click", fakeAsync(() =>{
    fixture.detectChanges();
    router.navigate(['/products'])
    tick();
    expect(location.path()).toBe("/products")
    fixture.detectChanges();

    let liElements = de.queryAll(By.css(".list-group-item"))
    liElements[1].nativeElement.click();
    tick();

    expect(location.path()).toBe("/product-detail")

  }))

  it("Should navigate to /products", fakeAsync(() => {
    fixture.detectChanges();
    router.navigate(['/products']);
    tick();
    expect(location.path()).toBe("/products")
  }))

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
