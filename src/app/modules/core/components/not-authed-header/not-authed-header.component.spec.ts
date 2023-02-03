import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthedHeaderComponent } from './not-authed-header.component';

describe('NotAuthedHeaderComponent', () => {
  let component: NotAuthedHeaderComponent;
  let fixture: ComponentFixture<NotAuthedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAuthedHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAuthedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
