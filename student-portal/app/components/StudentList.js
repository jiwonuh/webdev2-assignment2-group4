export default function StudentList({ students }) {
  return (
    <div className="studentList">
      {students.map((s, i) => (
        <div key={i} className="studentCard">
          <p><strong>Name:</strong> {s.firstName} {s.lastName}</p>
          <p><strong>Date of Birth:</strong> {s.dob}</p>
          <p><strong>Grade:</strong> {s.grade}</p>
        </div>
      ))}
    </div>
  );
}
