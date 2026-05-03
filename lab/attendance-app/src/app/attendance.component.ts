import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceService } from './attendance.service';
import { Attendance } from './attendance';
import { Student } from './student';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit {
  students: Student[] = [];
  attendanceRecords: Attendance[] = [];
  selectedDate: string = this.getTodayDate();
  stats: any = {};

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit() {
    this.students = this.attendanceService.getStudents();
    this.loadAttendance();
  }

  getTodayDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  loadAttendance() {
    this.attendanceRecords = this.attendanceService.getAttendanceByDate(this.selectedDate);
    this.updateStats();
  }

  markAttendance(studentId: number, status: 'present' | 'absent' | 'leave') {
    const student = this.students.find(s => s.id === studentId);
    if (!student) return;

    const existingIndex = this.attendanceRecords.findIndex(
      a => a.studentId === studentId && a.date === this.selectedDate
    );

    const attendance: Attendance = {
      id: existingIndex >= 0 ? this.attendanceRecords[existingIndex].id : 0,
      studentId,
      studentName: student.name,
      date: this.selectedDate,
      status
    };

    this.attendanceService.markAttendance(attendance);
    this.loadAttendance();
  }

  deleteRecord(id: number) {
    this.attendanceService.deleteAttendance(id);
    this.loadAttendance();
  }

  updateStats() {
    this.stats = this.attendanceService.getAttendanceStats(this.selectedDate);
  }

  onDateChange() {
    this.loadAttendance();
  }

  getStudentStatus(studentId: number): string {
    const record = this.attendanceRecords.find(a => a.studentId === studentId);
    return record ? record.status : 'not-marked';
  }

  isMarked(studentId: number): boolean {
    return this.attendanceRecords.some(a => a.studentId === studentId);
  }
}
