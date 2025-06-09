'use client';
import { useState, useEffect } from 'react';
import AddStudentForm from '../../components/AddStudentForm';


export default function AddStudentPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/data/students.json')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const handleAdd = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <main className="p-6">
        <h2 className="text-xl font-bold mb-4">Add New Student</h2>
        <AddStudentForm onAdd={handleAdd} />
      </main>
    </div>
  );
}

