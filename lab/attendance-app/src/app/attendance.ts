export interface Attendance {
  id: number;
  studentId: number;
  studentName: string;
  date: string;
  status: 'present' | 'absent' | 'leave';
  remarks?: string;
}
