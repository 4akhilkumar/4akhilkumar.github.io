import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriottComponent } from './marriott.component';

describe('MarriottComponent', () => {
  let component: MarriottComponent;
  let fixture: ComponentFixture<MarriottComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriottComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
