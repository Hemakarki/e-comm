import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorBidComponent } from './vendor-bid.component';

describe('VendorBidComponent', () => {
  let component: VendorBidComponent;
  let fixture: ComponentFixture<VendorBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
