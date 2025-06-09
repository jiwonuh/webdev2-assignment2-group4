'use client';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">New Generation High School</h1>
        <ul className="flex space-x-6">
          <li><a href="/">Home</a></li>
          <li><a href="/Add_Student">Add Student</a></li>
          <li><a href="/Student_List">Student List</a></li>
        </ul>
      </div>
    </nav>
  );
}
