import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpropertyListComponent } from './newproperty-list.component';

describe('NewpropertyListComponent', () => {
  let component: NewpropertyListComponent;
  let fixture: ComponentFixture<NewpropertyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewpropertyListComponent]
    });
    fixture = TestBed.createComponent(NewpropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
