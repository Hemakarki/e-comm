import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSyncComponent } from './product-sync.component';

describe('ProductSyncComponent', () => {
  let component: ProductSyncComponent;
  let fixture: ComponentFixture<ProductSyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
