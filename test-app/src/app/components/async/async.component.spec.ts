import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AsyncService } from 'src/app/services/async.service';

import { AsyncComponent } from './async.component';

xdescribe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;
  let asyncService : AsyncService;
  let de : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncComponent ],
      providers:      [ AsyncService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // Arrange
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    asyncService = TestBed.inject(AsyncService);
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it("Should display Login : fakeAsync...tick", fakeAsync(() => {
    fixture.detectChanges();
    const btnValue = de.query(By.css("#btnAuth")).nativeElement.textContent;
    expect(btnValue).toBe('Login');
    spyOn(asyncService, "getPromise").and.returnValue(Promise.resolve(true));
    component.ngOnInit();       // triggering Async Code
    tick();
    fixture.detectChanges();
    const btnValue2 = de.query(By.css("#btnAuth")).nativeElement.textContent;
    expect(btnValue2).toBe('Logout')
  }) )

  it("Should display login : async...whenStable()", async()=>{
    fixture.detectChanges();
    const btnValue = de.query(By.css("#btnAuth")).nativeElement.textContent;
    expect(btnValue).toBe('Login');
    spyOn(asyncService, "getPromise").and.returnValue(Promise.resolve(true))
    fixture.whenStable().then(() =>{
      // Write code that we need to run after all Async tasks are completed
      fixture.detectChanges();
      const btnValue2 = de.query(By.css("#btnAuth")).nativeElement.textContent;
      expect(btnValue2).toBe('Logout')
    })
    component.ngOnInit()    // Async Code
  })

  it("Should display login, if the user needsLogin is true - done()", (done) => {
    fixture.detectChanges();
    const btnValue = de.query(By.css("#btnAuth")).nativeElement.textContent;
    expect(btnValue).toBe('Login');
    let spy = spyOn(asyncService, "getPromise").and.returnValue(Promise.resolve(true))
    component.ngOnInit()
    spy.calls.mostRecent().returnValue.then(flag => {
      fixture.detectChanges();
      const btnValue2 = de.query(By.css("#btnAuth")).nativeElement.textContent;
      expect(btnValue2).toBe('Logout')
      done()
    })
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
