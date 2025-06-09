'use client';
import { useEffect, useState } from 'react';
import StudentList from '../../components/StudentList';


export default function StudentListPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/data/students.json')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <main className="p-6">
        <StudentList students={students} />
      </main>
    </div>
  );
}
