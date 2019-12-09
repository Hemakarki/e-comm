import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailTabComponent } from './product-detail-tab.component';

describe('ProductDetailTabComponent', () => {
  let component: ProductDetailTabComponent;
  let fixture: ComponentFixture<ProductDetailTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
