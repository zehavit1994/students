import React from "react";
import "../styles/dashboard.css";

export default ({ students }) => {
  return (
    <div className="dashboard">
      <span>Students List</span>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Major</th>
          <th>University</th>
          <th>Average grade</th>
        </tr>
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </table>
    </div>
  );
};

const Student = ({ student }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.university}</td>
      <td>{student.averageGrade}</td>
    </tr>
  );
};
