import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LehladakhComponent } from './lehladakh.component';

describe('LehladakhComponent', () => {
  let component: LehladakhComponent;
  let fixture: ComponentFixture<LehladakhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LehladakhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LehladakhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
