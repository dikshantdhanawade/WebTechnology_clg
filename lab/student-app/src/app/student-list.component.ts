import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from './student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  newStudent = {
    name: '',
    age: '',
    course: '',
    grade: 'A',
    attendance: ''
  };

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.students = this.studentService.getStudents();
  }

  addStudent(event: Event) {
    event.preventDefault();
    const name = (this.newStudent.name as any).trim();
    const course = (this.newStudent.course as any).trim();
    const age = Number(this.newStudent.age);
    const attendance = Number(this.newStudent.attendance);
    const grade = this.newStudent.grade as any;

    if (!name || !course || !age || !attendance) {
      return;
    }

    this.studentService.addStudent({
      name,
      age,
      course,
      grade,
      attendance
    });

    this.newStudent = { name: '', age: '', course: '', grade: 'A', attendance: '' };
    this.loadStudents();
  }

  removeStudent(id: number) {
    this.studentService.removeStudent(id);
    this.loadStudents();
  }

  viewDetails(id: number) {
    this.router.navigate(['/student', id]);
  }
}