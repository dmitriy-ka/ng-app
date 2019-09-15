import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideStepComponent } from './guide-step.component';

describe('GuideStepComponent', () => {
  let component: GuideStepComponent;
  let fixture: ComponentFixture<GuideStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
