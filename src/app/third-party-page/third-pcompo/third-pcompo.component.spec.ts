import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPCompoComponent } from './third-pcompo.component';

describe('ThirdPCompoComponent', () => {
  let component: ThirdPCompoComponent;
  let fixture: ComponentFixture<ThirdPCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPCompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdPCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
