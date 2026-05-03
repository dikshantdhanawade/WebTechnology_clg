import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { StudentDetailComponent } from './student-detail.component';

export const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'student/:id', component: StudentDetailComponent }
];
