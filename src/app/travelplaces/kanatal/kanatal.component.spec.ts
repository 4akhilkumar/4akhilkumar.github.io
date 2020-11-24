import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanatalComponent } from './kanatal.component';

describe('KanatalComponent', () => {
  let component: KanatalComponent;
  let fixture: ComponentFixture<KanatalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanatalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
