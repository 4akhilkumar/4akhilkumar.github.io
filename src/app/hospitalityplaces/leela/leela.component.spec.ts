import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeelaComponent } from './leela.component';

describe('LeelaComponent', () => {
  let component: LeelaComponent;
  let fixture: ComponentFixture<LeelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
