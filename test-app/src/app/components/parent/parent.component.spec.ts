import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent.component';

xdescribe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let de : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement
    fixture.detectChanges();
  });

  it("Should be able to send user with Input()", () => {
    component.user = { email : "foo@test.com", age : 42}
    fixture.detectChanges();
    let userEmail = de.query(By.css("#child-user-email")).nativeElement.textContent;
    let userAge = de.query(By.css("#child-user-age")).nativeElement.textContent;
    expect(userEmail).toContain(component.user.email)
    expect(userAge).toContain(component.user.age)
  })

  it('Should be able to access child Template', () => {
    fixture.detectChanges();
    const childValue = de.query(By.css("#child-h2")).nativeElement.textContent
    expect(childValue).toContain('Child Component')
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
