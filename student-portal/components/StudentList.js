export default function StudentList({ students }) {
  return (
    <div className="items-center justify-center ml-20 mr-20 mt-10 mb-10">
      <h2 className="">Student List: </h2>
      <ul className="space-y-5">
        {students.map((student, index) => (
          <li key={index}>
            <div>Name: {student.firstName} {student.lastName}</div>
            <div>Date of Birth: {student.dob}</div>
            <div>Grade: {student.grade}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
