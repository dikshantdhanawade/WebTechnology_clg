import { Component } from '@angular/core';
import { AttendanceComponent } from './attendance.component';

@Component({
  selector: 'app-root',
  imports: [AttendanceComponent],
  standalone: true,
  template: '<app-attendance></app-attendance>',
  styles: []
})
export class AppComponent {}
