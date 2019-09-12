import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTourStepComponent } from './ngx-tour-step.component';

describe('NgxTourStepComponent', () => {
  let component: NgxTourStepComponent;
  let fixture: ComponentFixture<NgxTourStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTourStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTourStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
