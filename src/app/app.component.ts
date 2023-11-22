import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ActionBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learn-angular';

  testClick() {
    console.log('testEventBinding_Button');
  }

  testNumberChange(value: number) {
    console.log('testEventBinding_NumberChange from app.component.ts: ', value);
  }
}
