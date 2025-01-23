import { Component } from '@angular/core';
import { SliderComponent } from '../../../components/slider/slider.component';
import { InputsComponent } from '../../../components/inputs/inputs.component';
import { DoctorsComponent } from '../../../components/doctors/doctors.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [SliderComponent, InputsComponent, DoctorsComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {}
