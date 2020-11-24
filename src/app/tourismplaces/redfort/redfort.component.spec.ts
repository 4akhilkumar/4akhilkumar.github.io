import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedfortComponent } from './redfort.component';

describe('RedfortComponent', () => {
  let component: RedfortComponent;
  let fixture: ComponentFixture<RedfortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedfortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
