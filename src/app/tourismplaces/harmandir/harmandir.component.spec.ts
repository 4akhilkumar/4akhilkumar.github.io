import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmandirComponent } from './harmandir.component';

describe('HarmandirComponent', () => {
  let component: HarmandirComponent;
  let fixture: ComponentFixture<HarmandirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarmandirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmandirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
