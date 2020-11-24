import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriyarComponent } from './periyar.component';

describe('PeriyarComponent', () => {
  let component: PeriyarComponent;
  let fixture: ComponentFixture<PeriyarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriyarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriyarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
