import { StepConfig } from './../../@types/guide.config.d';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() step: StepConfig;

  constructor() {}

  ngOnInit() {}
}
