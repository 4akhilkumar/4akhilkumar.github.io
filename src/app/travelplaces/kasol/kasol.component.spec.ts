import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KasolComponent } from './kasol.component';

describe('KasolComponent', () => {
  let component: KasolComponent;
  let fixture: ComponentFixture<KasolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KasolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KasolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
