import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import studentsData from "./data/students";
import "./App.css";
import AddStudent from "./components/AddStudent";

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
