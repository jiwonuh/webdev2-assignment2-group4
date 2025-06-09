'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">New Generation High School</h1>
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Student_List">Student List</Link></li>
          <li><Link href="/Add_Student">Add Student</Link></li>
        </ul>
      </div>
    </nav>
  );
}
