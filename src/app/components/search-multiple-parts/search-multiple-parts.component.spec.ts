import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMultiplePartsComponent } from './search-multiple-parts.component';

describe('SearchMultiplePartsComponent', () => {
  let component: SearchMultiplePartsComponent;
  let fixture: ComponentFixture<SearchMultiplePartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMultiplePartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMultiplePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
