import { CommonModule, DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

import {
  addDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  subDays,
} from 'date-fns';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  selectedIndex = signal<number | null>(null);

  onDate(index: number) {
    this.selectedIndex.set(index);
  }
  fixedToday = signal(new Date());
  today = signal(new Date());
  endDate = computed(() => addDays(this.today(), 6));

  week = computed(() =>
    eachDayOfInterval({
      start: this.today(),
      end: this.endDate(),
    })
  );

  isDisabled() {
    const fixed = this.fixedToday();
    const current = this.today();
    return (
      fixed.getFullYear() === current.getFullYear() &&
      fixed.getMonth() === current.getMonth() &&
      fixed.getDate() === current.getDate()
    );
  }
  onNextWeek() {
    this.today.set(addDays(this.today(), 7));
    this.selectedIndex.set(null);
  }

  onPreviousWeek() {
    this.today.set(subDays(this.today(), 7));
    this.selectedIndex.set(null);
  }
}
