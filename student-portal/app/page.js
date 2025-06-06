'use client';

import { useEffect, useState } from 'react';
import StudentList from '../components/StudentList';
import AddStudentForm from '../components/AddStudentForm';

export default function HomePage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/data/students.json')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, id: Date.now() }]);
  };

  return (
    <div>
      <AddStudentForm onAdd={handleAddStudent} />
      <StudentList students={students} />
    </div>
  );
}