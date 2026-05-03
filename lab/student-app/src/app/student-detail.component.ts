import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-detail.component.html'
})
export class StudentDetailComponent implements OnInit {

  student: any;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.studentService.getStudentById(id);
  }
}