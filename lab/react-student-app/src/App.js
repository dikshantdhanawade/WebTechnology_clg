import React, { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Rahul Sharma', age: 20, course: 'Computer Science', grade: 'A', attendance: 95 },
    { id: 2, name: 'Amit Kumar', age: 21, course: 'Information Technology', grade: 'B+', attendance: 88 },
    { id: 3, name: 'Sneha Patel', age: 19, course: 'Electronics', grade: 'A-', attendance: 92 },
    { id: 4, name: 'Priya Singh', age: 20, course: 'Mechanical Engineering', grade: 'B', attendance: 85 },
    { id: 5, name: 'Vikram Joshi', age: 22, course: 'Civil Engineering', grade: 'A+', attendance: 98 }
  ]);

  const [newStudent, setNewStudent] = useState({
    name: '',
    age: '',
    course: '',
    grade: 'A',
    attendance: ''
  });

  const nextId = useMemo(() => {
    return students.length ? Math.max(...students.map(student => student.id)) + 1 : 1;
  }, [students]);

  const stats = useMemo(() => {
    const total = students.length;
    const averageAge = total ? (students.reduce((sum, student) => sum + student.age, 0) / total).toFixed(1) : 0;
    const averageAttendance = total ? (students.reduce((sum, student) => sum + student.attendance, 0) / total).toFixed(1) : 0;
    const topGrade = total
      ? students.reduce((best, student) => {
          if (!best) return student.grade;
          const order = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D'];
          return order.indexOf(student.grade) < order.indexOf(best) ? student.grade : best;
        }, '')
      : 'N/A';
    const courses = total ? [...new Set(students.map(student => student.course))].length : 0;

    return { total, averageAge, averageAttendance, topGrade, courses };
  }, [students]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleAddStudent = event => {
    event.preventDefault();
    const trimmedName = newStudent.name.trim();
    const trimmedCourse = newStudent.course.trim();
    const ageValue = Number(newStudent.age);
    const attendanceValue = Number(newStudent.attendance);

    if (!trimmedName || !trimmedCourse || !ageValue || !attendanceValue) {
      return;
    }

    setStudents(prev => [
      ...prev,
      {
        id: nextId,
        name: trimmedName,
        age: ageValue,
        course: trimmedCourse,
        grade: newStudent.grade,
        attendance: attendanceValue
      }
    ]);

    setNewStudent({ name: '', age: '', course: '', grade: 'A', attendance: '' });
  };

  const handleRemoveStudent = id => {
    setStudents(prev => prev.filter(student => student.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Dashboard</h1>
        
      </header>

      <section className="dashboard-summary">
        <div className="summary-card">
          <h3>Total Students</h3>
          <p>{stats.total}</p>
        </div>
        <div className="summary-card">
          <h3>Average Age</h3>
          <p>{stats.averageAge}</p>
        </div>
        <div className="summary-card">
          <h3>Average Attendance</h3>
          <p>{stats.averageAttendance}%</p>
        </div>
        <div className="summary-card">
          <h3>Top Grade</h3>
          <p>{stats.topGrade}</p>
        </div>
        <div className="summary-card">
          <h3>Distinct Courses</h3>
          <p>{stats.courses}</p>
        </div>
      </section>

      <section className="student-actions">
        <div className="student-form">
          <h2>Add New Student</h2>
          <form onSubmit={handleAddStudent}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={newStudent.name}
                onChange={handleInputChange}
                placeholder="Enter student name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                min="1"
                value={newStudent.age}
                onChange={handleInputChange}
                placeholder="Age"
              />
            </div>
            <div className="form-row">
              <label htmlFor="course">Course</label>
              <input
                id="course"
                name="course"
                type="text"
                value={newStudent.course}
                onChange={handleInputChange}
                placeholder="Course name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="grade">Grade</label>
              <select id="grade" name="grade" value={newStudent.grade} onChange={handleInputChange}>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="attendance">Attendance</label>
              <input
                id="attendance"
                name="attendance"
                type="number"
                min="0"
                max="100"
                value={newStudent.attendance}
                onChange={handleInputChange}
                placeholder="Attendance %"
              />
            </div>
            <button type="submit" className="primary-button">Add Student</button>
          </form>
        </div>
      </section>

      <main>
        <section className="dashboard-table">
          <h2>Student Performance Overview</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Grade</th>
                <th>Attendance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                  <td>{student.grade}</td>
                  <td>{student.attendance}%</td>
                  <td>
                    <button className="danger-button" onClick={() => handleRemoveStudent(student.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;