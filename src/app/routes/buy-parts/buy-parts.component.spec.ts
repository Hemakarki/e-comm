import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPartsComponent } from './buy-parts.component';

describe('BuyPartsComponent', () => {
  let component: BuyPartsComponent;
  let fixture: ComponentFixture<BuyPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
