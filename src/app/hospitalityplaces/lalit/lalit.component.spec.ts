import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LalitComponent } from './lalit.component';

describe('LalitComponent', () => {
  let component: LalitComponent;
  let fixture: ComponentFixture<LalitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LalitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LalitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
