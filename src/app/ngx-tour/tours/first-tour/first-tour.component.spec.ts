import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTourComponent } from './first-tour.component';

describe('FirstTourComponent', () => {
  let component: FirstTourComponent;
  let fixture: ComponentFixture<FirstTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
