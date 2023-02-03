import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthedUserWrapperComponent } from './not-authed-user-wrapper.component';

describe('NotAuthedUserWrapperComponent', () => {
  let component: NotAuthedUserWrapperComponent;
  let fixture: ComponentFixture<NotAuthedUserWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAuthedUserWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAuthedUserWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
