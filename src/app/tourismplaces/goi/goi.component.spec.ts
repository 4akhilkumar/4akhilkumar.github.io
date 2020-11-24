import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiComponent } from './goi.component';

describe('GoiComponent', () => {
  let component: GoiComponent;
  let fixture: ComponentFixture<GoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
