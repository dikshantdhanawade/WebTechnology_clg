import { Injectable } from '@angular/core';
import { Attendance } from './attendance';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private students: Student[] = [
    { id: 1, name: 'Rahul Sharma', rollNumber: '001', className: '10-A' },
    { id: 2, name: 'Amit Kumar', rollNumber: '002', className: '10-A' },
    { id: 3, name: 'Sneha Patel', rollNumber: '003', className: '10-A' },
    { id: 4, name: 'Priya Singh', rollNumber: '004', className: '10-A' },
    { id: 5, name: 'Vikram Joshi', rollNumber: '005', className: '10-A' }
  ];

  private attendanceRecords: Attendance[] = [
    { id: 1, studentId: 1, studentName: 'Rahul Sharma', date: '2026-05-01', status: 'present' },
    { id: 2, studentId: 2, studentName: 'Amit Kumar', date: '2026-05-01', status: 'present' },
    { id: 3, studentId: 3, studentName: 'Sneha Patel', date: '2026-05-01', status: 'absent' },
    { id: 4, studentId: 4, studentName: 'Priya Singh', date: '2026-05-01', status: 'present' }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  getAttendanceRecords(): Attendance[] {
    return this.attendanceRecords;
  }

  getAttendanceByDate(date: string): Attendance[] {
    return this.attendanceRecords.filter(record => record.date === date);
  }

  markAttendance(attendance: Attendance): void {
    const existingIndex = this.attendanceRecords.findIndex(
      a => a.studentId === attendance.studentId && a.date === attendance.date
    );

    if (existingIndex >= 0) {
      this.attendanceRecords[existingIndex] = attendance;
    } else {
      const newId = this.attendanceRecords.length ? Math.max(...this.attendanceRecords.map(a => a.id)) + 1 : 1;
      this.attendanceRecords.push({ ...attendance, id: newId });
    }
  }

  deleteAttendance(id: number): void {
    this.attendanceRecords = this.attendanceRecords.filter(a => a.id !== id);
  }

  getAttendanceStats(date: string) {
    const records = this.getAttendanceByDate(date);
    const present = records.filter(r => r.status === 'present').length;
    const absent = records.filter(r => r.status === 'absent').length;
    const leave = records.filter(r => r.status === 'leave').length;
    const total = this.students.length;
    const marked = records.length;

    return { total, marked, present, absent, leave };
  }
}
