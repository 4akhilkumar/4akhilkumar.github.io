import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktravelComponent } from './booktravel.component';

describe('BooktravelComponent', () => {
  let component: BooktravelComponent;
  let fixture: ComponentFixture<BooktravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
