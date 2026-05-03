import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    { name: 'Dikshant', age: 22, course: 'AIML' },
    { name: 'Haris', age: 23, course: 'CSE' },
    { name: 'Shubham', age: 21, course: 'AIDS' },
  ];

  getStudents() {
    return this.students;
  }

  addStudent(student: { name: string; age: number; course: string }) {
    this.students.push(student);
  }
}
