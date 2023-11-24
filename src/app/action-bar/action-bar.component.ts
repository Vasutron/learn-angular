import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqaureFlexComponent } from '../sqaure-flex/sqaure-flex.component';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [CommonModule, SqaureFlexComponent],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
})
export class ActionBarComponent {
  @Input() step: number = 1;
  @Output() numberChange = new EventEmitter();
  @Input() counter = 0;

  decrease() {
    if (this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
      this.numberChange.emit(this.counter);
    }
  }

  increase() {
    if (this.counter + this.step <= 100) {
      this.counter = this.counter + this.step;
      this.numberChange.emit(this.counter);
    }
  }
}

// <app-action-bar
// [(counter)]="appCounter">
// </app-action-bar>
