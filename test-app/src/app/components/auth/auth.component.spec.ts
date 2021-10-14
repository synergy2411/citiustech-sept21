import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authService : AuthService;
  let de : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      providers :   [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService)
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it("Should generate salary slip, if user is authenticated", () => {
    spyOn(authService,"checkToken").and.returnValue(true)
    component.getSalarySlip();
    fixture.detectChanges();
    expect(component.salarySlip).toBe('Generate Salary Slip')
    expect(authService.checkToken).toHaveBeenCalled()
    const value = de.query(By.css("h3")).nativeElement.textContent;
    expect(value).toContain(component.salarySlip)
  })


  it("Should authenticate the user", () => {
    spyOn(authService,"checkToken").and.returnValue(true)
    let status = component.isAuthenticated()
    fixture.detectChanges()
    expect(status).toBe("AUHTENTICATED")
    expect(authService.checkToken).toHaveBeenCalled()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
