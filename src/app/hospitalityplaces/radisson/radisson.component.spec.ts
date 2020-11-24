import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadissonComponent } from './radisson.component';

describe('RadissonComponent', () => {
  let component: RadissonComponent;
  let fixture: ComponentFixture<RadissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
