import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guard01Component } from './guard01.component';

describe('Guard01Component', () => {
  let component: Guard01Component;
  let fixture: ComponentFixture<Guard01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Guard01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guard01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
