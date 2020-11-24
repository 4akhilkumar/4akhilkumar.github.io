import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveldashboardComponent } from './traveldashboard.component';

describe('TraveldashboardComponent', () => {
  let component: TraveldashboardComponent;
  let fixture: ComponentFixture<TraveldashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraveldashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraveldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
