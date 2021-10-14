import { Location } from "@angular/common"
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { Router } from "@angular/router"
import { RouterTestingModule, SpyNgModuleFactoryLoader } from "@angular/router/testing"
import { AppComponent } from "../app.component"
import { REVISED_ROUTES } from "../revised.routes"
import { LazyModule } from "./lazy/lazy.module"

describe("Lazy Route", () => {
  // Arrange
  let fixture : ComponentFixture<AppComponent>;
  let component : AppComponent;
  let router : Router;
  let location : Location;
  let loader : SpyNgModuleFactoryLoader;

  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      declarations    : [AppComponent],
      imports :     [RouterTestingModule.withRoutes(REVISED_ROUTES)],
      providers:    [SpyNgModuleFactoryLoader]
    }).compileComponents();
  })

  beforeEach(()=>{
    // Act
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    loader = TestBed.inject(SpyNgModuleFactoryLoader)
  })

  it("Should load the module lazily", fakeAsync(() => {
    loader.stubbedModules = { lazyModule : LazyModule }
    fixture.detectChanges();
    router.navigateByUrl('/lazy');
    tick();
    fixture.detectChanges();
    expect(location.path()).toContain("/lazy")
  }))

})
