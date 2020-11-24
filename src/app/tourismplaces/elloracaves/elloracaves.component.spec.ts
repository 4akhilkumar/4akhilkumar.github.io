import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElloracavesComponent } from './elloracaves.component';

describe('ElloracavesComponent', () => {
  let component: ElloracavesComponent;
  let fixture: ComponentFixture<ElloracavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElloracavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElloracavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
