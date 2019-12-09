import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSidebarMenuComponent } from './vendor-sidebar-menu.component';

describe('VendorSidebarMenuComponent', () => {
  let component: VendorSidebarMenuComponent;
  let fixture: ComponentFixture<VendorSidebarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSidebarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
