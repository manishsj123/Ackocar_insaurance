import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiPostUpdateDeleteComponent } from './servi-post-update-delete.component';

describe('ServiPostUpdateDeleteComponent', () => {
  let component: ServiPostUpdateDeleteComponent;
  let fixture: ComponentFixture<ServiPostUpdateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiPostUpdateDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiPostUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
