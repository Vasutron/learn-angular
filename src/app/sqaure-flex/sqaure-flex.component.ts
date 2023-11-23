import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sqaure-flex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sqaure-flex.component.html',
  styleUrl: './sqaure-flex.component.scss'
})
export class SqaureFlexComponent {
  @Input() divWidth = 100;
  @Input() divHeight = 100;
}
