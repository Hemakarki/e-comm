import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSidebarMenuComponent } from './user-sidebar-menu.component';

describe('UserSidebarMenuComponent', () => {
  let component: UserSidebarMenuComponent;
  let fixture: ComponentFixture<UserSidebarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSidebarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
