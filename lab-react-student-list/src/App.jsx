import { useState } from 'react';
import './App.css';
import { studentsData } from './students';
import AddStudentForm from './components/AddStudentForm';

export default function App() {
  const [students, setStudents] = useState(studentsData);

  function addStudent(newStudent) {
    setStudents(prev => [...prev, newStudent]); // immutable update
  }

  return (
    <div className="App">
      <AddStudentForm onAddStudent={addStudent} />

      <h1>Student List</h1>
      <div className="student-list">
        {students.map(s => (
          <div key={s._id} className="student-card">
            <img src={s.image} alt={s.fullName} />
            <h3>{s.fullName}</h3>
            <p>Program: {s.program}</p>
            <p>Email: {s.email}</p>
            <p>Phone: {s.phone}</p>
            <p>Graduated: {s.graduated ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
