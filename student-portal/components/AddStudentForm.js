import { useState } from 'react';

export default function AddStudentForm({ onAdd }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.dob || !formData.grade) {
      alert("Please fill out all fields.");
      return;
    }

    onAdd(formData);

    setFormData({ firstName: '', lastName: '', dob: '', grade: '' });
  };

  return (
    <div className='items-center justify-center ml-20 mr-20 mt-10 mb-10'>
      <h2>Add New Student: </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}
