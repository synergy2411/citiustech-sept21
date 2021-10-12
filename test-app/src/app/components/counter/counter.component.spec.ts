import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  // Arrange
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let h1 : HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // Act
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1')
    fixture.detectChanges();
  });

  it("Should render counter on template h1 element", () => {
    expect(h1.textContent).toBe(component.counter.toString())
  })


  it('should create', () => {
    // Assertion
    expect(component).toBeTruthy();
  });
});
