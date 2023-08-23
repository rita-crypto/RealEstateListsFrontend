import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertylistuserComponent } from './propertylistuser.component';

describe('PropertylistuserComponent', () => {
  let component: PropertylistuserComponent;
  let fixture: ComponentFixture<PropertylistuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertylistuserComponent]
    });
    fixture = TestBed.createComponent(PropertylistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
