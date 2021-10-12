import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authService : AuthService;

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
    fixture.detectChanges();
  });

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
