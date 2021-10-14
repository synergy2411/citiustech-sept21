import { Location } from "@angular/common";
import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { BrowserModule, By } from "@angular/platform-browser";
import { ActivatedRoute, convertToParamMap, Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { of } from "rxjs";
import { Browser } from "selenium-webdriver";
import { AppComponent } from "./app.component";
import { APP_ROUTES } from "./app.routes";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductService } from "./services/product.service";


describe("App Routes", () => {
  let fixture : ComponentFixture<AppComponent>;
  let component : AppComponent;
  let router : Router;
  let location : Location;
  let de : DebugElement;
  let service : ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations :  [AppComponent, HomeComponent, ProductsComponent, PageNotFoundComponent],
      imports :       [
        RouterTestingModule.withRoutes(APP_ROUTES)],
      //  providers : [ProductService, ActivatedRoute]
      providers:      [ ProductService,
        {
          provide : ActivatedRoute,
          useValue : {
            paramMap : of(convertToParamMap({id : 101}))
          }
        }

      ]
    }).compileComponents()
  })

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    TestBed.inject(ProductService)
    de = fixture.debugElement;
    router.initialNavigation()
  })

  it("Should navigate to /product-detail with Route parameter", fakeAsync(() => {
    fixture.detectChanges();
    router.navigate(['/products'])
    tick();
    expect(location.path()).toBe('/products')
    fixture.detectChanges();
    let liElements = de.queryAll(By.css('.list-group-item'))
    liElements[0].nativeElement.click();
    tick();
    expect(location.path()).toBe('/product-detail')
    fixture.detectChanges();
    let productDetailFixture =TestBed.createComponent(ProductDetailComponent)
    let productDetailComponentInstance = productDetailFixture.componentInstance;
    fixture.detectChanges()
    tick();
    productDetailComponentInstance.ngOnInit();
    tick();
    // expect(productDetailComponentInstance).toBeTruthy()
    expect(productDetailComponentInstance.product.id).toBe(101)
  }))

  it("Should navigate to /product-detail from /product on li:click", fakeAsync(() =>{
    fixture.detectChanges();
    router.navigate(['/products'])
    tick();
    expect(location.path()).toBe("/products")
    fixture.detectChanges();

    let liElements = de.queryAll(By.css(".list-group-item"))
    liElements[0].nativeElement.click();
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
