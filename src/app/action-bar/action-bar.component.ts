import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
})
export class ActionBarComponent {

  @Input() step:number = 1;
  @Output() numberChange = new EventEmitter();
  counter: number = 0;

  decrease() {
    // console.log('ลดค่าครั้งละ :', this.step, "=",this.counter );
    if (this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
      this.numberChange.emit(this.counter);
    }
    // console.log('ลดค่าครั้งละ :', this.step, "=",this.counter );
  }

  increase() {
    // console.log('เพิ่มค่าครั้งละ :', this.step, "=",this.counter);
    if(this.counter + this.step <= 50) {
    this.counter =  this.counter+ this.step;
    this.numberChange.emit(this.counter);
    }
    // console.log('เพิ่มค่าครั้งละ :', this.step, "=",this.counter);
  }
}
