import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidSummaryComponent } from './bid-summary.component';

describe('BidSummaryComponent', () => {
  let component: BidSummaryComponent;
  let fixture: ComponentFixture<BidSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
