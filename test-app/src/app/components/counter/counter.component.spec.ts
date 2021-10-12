import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let h11 : HTMLElement;
  let de : DebugElement;
  let h1;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    h11 = fixture.nativeElement.querySelector('h1')
    de = fixture.debugElement;
    h1 = de.query(By.css("h1"))
    fixture.detectChanges();
  });

  it("Should increase the counter when button is clicked", () =>{
    let btnIncarese = de.query(By.css("#btnIncrease"))
    btnIncarese.triggerEventHandler("click", {})        // Simulates button click
    fixture.detectChanges()
    expect(h1.nativeElement.textContent).toBe(component.counter.toString())
  } )

  it("Should decrease the counter when button is clicked",() =>{
    let btnDecrease = de.query(By.css("#btnDecrease"))
    btnDecrease.triggerEventHandler("click", {});
    fixture.detectChanges();
    expect(parseInt(h1.nativeElement.textContent)).toBe(component.counter)
  })

  it("Should render counter on template h1 element", () => {
    expect(h11.textContent).toBe(component.counter.toString())
  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
