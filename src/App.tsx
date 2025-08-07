import { useState } from "react";
import { studentsData } from "./students";
import AddStudentForm from "./component/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [toggle, setToggle] = useState("Show");
  const [isShown, setIsShown] = useState(false);

  const handleToggle = () => {
    setIsShown(!isShown);
    setToggle(isShown ? "Show" : "Hide");
  };
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };
  return (
    <>
      <div>
        <h1>Students Data</h1>
        <div className="student-list">
          {students.map((student) => {
            return (
              <div key={student._id} className="student-card">
                <p>{student.fullName}</p>
                <img src={student.image} />
                <p>{student.phone}</p>
                <p>{student.email}</p>
                <p>{student.program}</p>
                <p>{student.graduated ? "Yes" : "No"}</p>
              </div>
            );
          })}
        </div>
        <button onClick={handleToggle}>{toggle}</button>
        {isShown && <AddStudentForm addStudent={addStudent} />}
      </div>
    </>
  );
}

export default App;
