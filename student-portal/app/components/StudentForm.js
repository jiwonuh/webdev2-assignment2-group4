'use client';

import React, { useState } from 'react';

export default function StudentForm({ students, setStudents }) {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { ...student };
    setStudents([...students, newStudent]);
    setStudent({ firstName: '', lastName: '', dob: '', grade: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="studentForm">
      <input name="firstName" placeholder="First Name" value={student.firstName} onChange={handleChange} required />
      <input name="lastName" placeholder="Last Name" value={student.lastName} onChange={handleChange} required />
      <input name="dob" type="date" value={student.dob} onChange={handleChange} required />
      <input name="grade" placeholder="Grade" value={student.grade} onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
}
