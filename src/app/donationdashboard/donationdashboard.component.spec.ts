import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationdashboardComponent } from './donationdashboard.component';

describe('DonationdashboardComponent', () => {
  let component: DonationdashboardComponent;
  let fixture: ComponentFixture<DonationdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
