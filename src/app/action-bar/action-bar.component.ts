import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
})
export class ActionBarComponent {
  counter: number = 0;

  decrease() {
    console.log('decrease');
    if (this.counter - 1 >= 0) {
      this.counter = this.counter -1;
    }
  }

  increase() {
    console.log('increase');
    if(this.counter + 1 <= 10) {
    this.counter =  this.counter+1;
    }
  }
}
