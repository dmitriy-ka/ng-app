import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTourComponent } from './ngx-tour.component';

describe('NgxTourComponent', () => {
  let component: NgxTourComponent;
  let fixture: ComponentFixture<NgxTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
