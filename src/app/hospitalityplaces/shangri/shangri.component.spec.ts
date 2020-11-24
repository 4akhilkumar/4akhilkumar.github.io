import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShangriComponent } from './shangri.component';

describe('ShangriComponent', () => {
  let component: ShangriComponent;
  let fixture: ComponentFixture<ShangriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShangriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShangriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
