export default function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <div>{student.firstName} {student.lastName}</div>
            <div>Date of Birth: {student.dob}</div>
            <div>Grade: {student.grade}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
