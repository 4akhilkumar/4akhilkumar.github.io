import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutchComponent } from './kutch.component';

describe('KutchComponent', () => {
  let component: KutchComponent;
  let fixture: ComponentFixture<KutchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
