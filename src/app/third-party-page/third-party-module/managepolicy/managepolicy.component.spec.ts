import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepolicyComponent } from './managepolicy.component';

describe('ManagepolicyComponent', () => {
  let component: ManagepolicyComponent;
  let fixture: ComponentFixture<ManagepolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagepolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
