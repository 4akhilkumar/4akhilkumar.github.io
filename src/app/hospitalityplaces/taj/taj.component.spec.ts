import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TajComponent } from './taj.component';

describe('TajComponent', () => {
  let component: TajComponent;
  let fixture: ComponentFixture<TajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
