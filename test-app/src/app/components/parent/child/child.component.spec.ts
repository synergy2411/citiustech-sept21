import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/model/user';

import { ChildComponent } from './child.component';

xdescribe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should be able to trigger childEvent with User values", () => {
    let emittedUser : User;
    component.childEvent.subscribe((user : User) => {
      emittedUser = user;
    })
    component.userAge = 34;
    component.userEmail = "new@email.com";
    component.saveUser();
    expect(emittedUser.email).toBe(component.userEmail);
    expect(emittedUser.age).toEqual(component.userAge);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
