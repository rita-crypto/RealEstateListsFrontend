import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinguserComponent } from './bookinguser.component';

describe('BookinguserComponent', () => {
  let component: BookinguserComponent;
  let fixture: ComponentFixture<BookinguserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookinguserComponent]
    });
    fixture = TestBed.createComponent(BookinguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
