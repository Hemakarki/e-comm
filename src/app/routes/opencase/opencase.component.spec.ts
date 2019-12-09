import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencaseComponent } from './opencase.component';

describe('OpencaseComponent', () => {
  let component: OpencaseComponent;
  let fixture: ComponentFixture<OpencaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpencaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
