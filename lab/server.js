const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;
const dbFile = path.join(__dirname, 'students.db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize SQLite database
const db = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    console.error('Failed to open database:', err.message);
    process.exit(1);
  }
  console.log('Connected to SQLite database.');
});

const createTableSql = `
CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  course TEXT NOT NULL,
  grade TEXT NOT NULL
);`;

db.run(createTableSql, (err) => {
  if (err) {
    console.error('Failed to create students table:', err.message);
  }
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Experiment E11: Node.js SQL CRUD Application is running.\nUse /students endpoints for CRUD operations.');
});

app.get('/students', (req, res) => {
  const sql = 'SELECT * FROM students';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.get('/students/:id', (req, res) => {
  const sql = 'SELECT * FROM students WHERE id = ?';
  db.get(sql, [req.params.id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(row);
  });
});

app.post('/students', (req, res) => {
  const { name, age, course, grade } = req.body;
  if (!name || !age || !course || !grade) {
    return res.status(400).json({ error: 'Please provide name, age, course, and grade' });
  }
  const sql = 'INSERT INTO students (name, age, course, grade) VALUES (?, ?, ?, ?)';
  const params = [name, age, course, grade];
  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, name, age, course, grade });
  });
});

app.put('/students/:id', (req, res) => {
  const { name, age, course, grade } = req.body;
  const sql = 'UPDATE students SET name = ?, age = ?, course = ?, grade = ? WHERE id = ?';
  const params = [name, age, course, grade, req.params.id];

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ id: Number(req.params.id), name, age, course, grade });
  });
});

app.delete('/students/:id', (req, res) => {
  const sql = 'DELETE FROM students WHERE id = ?';
  db.run(sql, [req.params.id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
