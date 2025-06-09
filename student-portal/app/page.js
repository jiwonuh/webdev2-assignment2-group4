'use client';

import React, { useState } from 'react';
import initialStudents from './data/students.json';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

export default function Page() {
  const [students, setStudents] = useState(initialStudents);

  return (
    <div>
      <h1>Student List</h1>
      <StudentForm students={students} setStudents={setStudents} />
      <StudentList students={students} />
    </div>
  );
}

