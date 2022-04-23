import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAdddressComponent } from './name-adddress.component';

describe('NameAdddressComponent', () => {
  let component: NameAdddressComponent;
  let fixture: ComponentFixture<NameAdddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameAdddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameAdddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
