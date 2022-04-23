import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActComponent } from './can-act.component';

describe('CanActComponent', () => {
  let component: CanActComponent;
  let fixture: ComponentFixture<CanActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanActComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
