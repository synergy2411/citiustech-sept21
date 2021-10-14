import { Location } from "@angular/common"
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { Router } from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"
import { AppComponent } from "./app.component"
import { HomeComponent } from "./components/home/home.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"
import { REVISED_ROUTES } from "./revised.routes"

describe("Revised Routes", () => {

  let router : Router
  let fixture : ComponentFixture<AppComponent>
  let component : AppComponent
  let location : Location

  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      declarations:     [ AppComponent, HomeComponent, PageNotFoundComponent],
      imports:          [ RouterTestingModule.withRoutes(REVISED_ROUTES) ]
    })
  })

  beforeEach(() => {
    router = TestBed.inject(Router)
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location)
    router.initialNavigation();       // http://localhost:4200
  })

  it("Should navigate to /home from initial route", fakeAsync(() => {
    fixture.detectChanges();
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home')
  }))

})
