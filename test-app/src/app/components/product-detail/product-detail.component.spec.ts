import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let service : ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailComponent],
      providers: [
        ProductService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ id: 102 })),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('Should receive the route parameter', fakeAsync(() =>{
    fixture.detectChanges();
    tick();
    component.ngOnInit();
    tick();
    expect(component.product.id).toBe(102)
  }))

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
