import { Component } from '@angular/core';
import { SliderComponent } from '../../../components/slider/slider.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {}
