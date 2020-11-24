import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirbillingComponent } from './birbilling.component';

describe('BirbillingComponent', () => {
  let component: BirbillingComponent;
  let fixture: ComponentFixture<BirbillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirbillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
