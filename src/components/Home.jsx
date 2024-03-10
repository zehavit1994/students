import { useState } from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import studentsData from "../data/students";
import AddStudent from "./AddStudent";

export default () => {
  const [students, setStudents] = useState(studentsData);
  return (
    <>
      <Header />
      <Dashboard
        students={students}
        removeStudent={(id) => {
          setStudents(students.filter((s) => s.id !== id));
        }}
      />
      <AddStudent
        addStudent={(student) => {
          student.id = Math.max(students.map((s) => s.id)) + 1;
          setStudents([...students, student]);
        }}
      />
      <Footer />
    </>
  );
};
