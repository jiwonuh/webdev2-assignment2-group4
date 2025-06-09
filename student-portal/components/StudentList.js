'use client';
import { useEffect, useState } from 'react';

export default function StudentListPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('students');
    if (stored) {
      setStudents(JSON.parse(stored));
    } else {
      fetch('/data/students.json')
        .then((res) => res.json())
        .then((data) => {
          setStudents(data);
        });
    }
  }, []);

  return (
    <div>
      <main className="p-6">
        <h2 className="text-xl font-bold mb-4">Student List</h2>
        {students.map((student) => (
          <div key={student.id} className="mb-4 p-4 rounded bg-white">
            <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
            <p><strong>Date of Birth:</strong> {student.dob}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
