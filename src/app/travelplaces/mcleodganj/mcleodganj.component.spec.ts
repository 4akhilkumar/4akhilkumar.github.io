import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McleodganjComponent } from './mcleodganj.component';

describe('McleodganjComponent', () => {
  let component: McleodganjComponent;
  let fixture: ComponentFixture<McleodganjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McleodganjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McleodganjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
