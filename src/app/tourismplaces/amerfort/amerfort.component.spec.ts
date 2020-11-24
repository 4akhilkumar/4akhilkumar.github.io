import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmerfortComponent } from './amerfort.component';

describe('AmerfortComponent', () => {
  let component: AmerfortComponent;
  let fixture: ComponentFixture<AmerfortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmerfortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmerfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
