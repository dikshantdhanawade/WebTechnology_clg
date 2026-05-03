import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    { id: 1, name: 'Rahul Sharma', age: 20, course: 'Computer Science', grade: 'A', attendance: 95 },
    { id: 2, name: 'Amit Kumar', age: 21, course: 'Information Technology', grade: 'B+', attendance: 88 },
    { id: 3, name: 'Sneha Patel', age: 19, course: 'Electronics', grade: 'A-', attendance: 92 },
    { id: 4, name: 'Priya Singh', age: 20, course: 'Mechanical Engineering', grade: 'B', attendance: 85 },
    { id: 5, name: 'Vikram Joshi', age: 22, course: 'Civil Engineering', grade: 'A+', attendance: 98 }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }

  addStudent(student: Omit<Student, 'id'>): Student {
    const newId = this.students.length ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
    const newStudent: Student = { ...student, id: newId };
    this.students.push(newStudent);
    return newStudent;
  }

  removeStudent(id: number): void {
    this.students = this.students.filter(s => s.id !== id);
  }
}