# Experiment E11: Node.js SQL CRUD Application

## Experiment Title
Connect Node.js application with SQL database and perform CRUD operations

## Objective
To understand and implement concepts related to connecting a Node.js application with an SQL database and performing CRUD operations.

## Prerequisites
- Basic knowledge of Web Technologies
- Node.js / Browser installed

## Theory
This experiment helps students understand how to connect a Node.js application with an SQL database and perform CRUD operations through hands-on implementation. The app uses SQLite for local SQL storage and Express for API handling.

## Procedure
1. Create required project structure.
2. Write the Node.js program with Express and SQLite.
3. Implement database initialization and CRUD routes.
4. Execute the server and test endpoints.
5. Verify that create, read, update, and delete operations work.

## Implementation Details
- **Express**: Handles routing and JSON request parsing.
- **SQLite**: Local SQL database stored in `students.db`.
- **CRUD Endpoints**:
  - `GET /students` - List all students
  - `GET /students/:id` - Get student by ID
  - `POST /students` - Create a new student
  - `PUT /students/:id` - Update a student
  - `DELETE /students/:id` - Delete a student

## How to Run
1. Install dependencies:
   ```bash
   npm install sqlite3
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open the browser or use an API client at:
   ```text
   http://localhost:3000
   ```

## Result
The experiment was executed successfully and the desired output was obtained. The Node.js application now connects to a SQL database and performs CRUD operations using REST endpoints.

## Conclusion
This experiment helped in understanding how to connect a Node.js application with a SQL database and perform CRUD operations in a practical manner.
