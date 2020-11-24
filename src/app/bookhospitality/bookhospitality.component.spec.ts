import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookhospitalityComponent } from './bookhospitality.component';

describe('BookhospitalityComponent', () => {
  let component: BookhospitalityComponent;
  let fixture: ComponentFixture<BookhospitalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookhospitalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookhospitalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
