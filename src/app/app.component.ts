import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ActionBarComponent,
    MaxMinMeterComponent,
    SqaureFlexComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
doMaxChange($event: any) {
throw new Error('Method not implemented.');
}

doMinChange($event: any) {
throw new Error('Method not implemented.');
}
  title = 'learn-angular';
  MyminLabel = 'AppMyMinLabel';
  MymaxLabel = 'AppMyMaxLabel';
  MydivWidth = 20;
  MydivHeight = 20;

  appCounter = 20;

  active : boolean = false;

  customerList : string[] = ['Customer1', 'Customer2', 'Customer3', 'Customer4', 'Customer5'];

  testClick() {
    console.log('testEventBinding_Button');
  }

  testNumberChange(value: number) {
    console.log('testEventBinding_NumberChange from app.component.ts: ', value);
  }

  doAppMaxChange(value: number) {
    console.log('doAppMaxChange from app.component.ts: ', value);
  }

  doAppMinChange(value: number) {
    console.log('doAppMinChange from app.component.ts: ', value);
  }

}
