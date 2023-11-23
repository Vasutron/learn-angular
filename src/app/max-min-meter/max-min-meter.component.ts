import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarComponent } from '../action-bar/action-bar.component';

@Component({
  selector: 'app-max-min-meter',
  standalone: true,
  imports: [CommonModule, ActionBarComponent],
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.scss',
})
export class MaxMinMeterComponent {
  @Input() minLabel = 'minLabel';
  @Input() maxLabel = 'maxLabel';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  doMinChange(value: number) {
    this.minChange.emit(value);
    // console.log('doMinChange from min-meter.component.ts: ', value);
  }

  doMaxChange(value: number) {
    this.maxChange.emit(value);
    // console.log('doMaxChange from max-meter.component.ts: ', value);
  }
}
