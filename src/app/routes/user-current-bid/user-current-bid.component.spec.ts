import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCurrentBidComponent } from './user-current-bid.component';

describe('UserCurrentBidComponent', () => {
  let component: UserCurrentBidComponent;
  let fixture: ComponentFixture<UserCurrentBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCurrentBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCurrentBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
