import React from "react";
import "../styles/dashboard.css";

export default (props) => {
  return (
    <div className="dashboard">
      <span>Hello, {localStorage.getItem("username")}</span>
      <span>Students List</span>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Major</th>
          <th>University</th>
          <th>Average grade</th>
          <th>Actions</th>
        </tr>
        {props.students.map((student) => (
          <Student
            key={student.id}
            student={student}
            removeStudent={props.removeStudent}
          />
        ))}
      </table>
    </div>
  );
};

const Student = ({ student, removeStudent }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.university}</td>
      <td>{student.averageGrade}</td>
      <td className="action-col">
        <button onClick={() => removeStudent(student.id)}>-</button>
      </td>
    </tr>
  );
};
