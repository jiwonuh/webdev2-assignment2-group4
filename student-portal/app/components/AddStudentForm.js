'use client';
import { useState, useEffect } from 'react';

export default function AddStudentPage() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: '',
  });

  useEffect(() => {
    const stored = localStorage.getItem('students');
    if (stored) {
      setStudents(JSON.parse(stored));
    } else {
      fetch('/data/students.json')
        .then((res) => res.json())
        .then((data) => {
          setStudents(data);
          localStorage.setItem('students', JSON.stringify(data));
        });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.dob || !formData.grade) {
      alert("Please fill out all fields.");
      return;
    }

    if (isNaN(formData.grade)) {
      alert("Grade must be a number.");
      return;
    }

    const newStudent = { ...formData, id: Date.now() };
    const updated = [...students, newStudent];
    setStudents(updated);
    localStorage.setItem('students', JSON.stringify(updated));
    setFormData({ firstName: '', lastName: '', dob: '', grade: '' });
  };

  return (
    <div className="bg-white p-6 rounded-lg max-w-xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Grade</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <div className="col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}
