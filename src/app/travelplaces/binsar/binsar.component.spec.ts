import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinsarComponent } from './binsar.component';

describe('BinsarComponent', () => {
  let component: BinsarComponent;
  let fixture: ComponentFixture<BinsarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinsarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
