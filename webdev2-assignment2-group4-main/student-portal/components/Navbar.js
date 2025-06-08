'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">New Generation High School</h1>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/Student_List" className="hover:underline">Student List</Link></li>
          <li><Link href="/Add_Student" className="hover:underline">Add Student</Link></li>
        </ul>
      </div>
    </nav>
  );
}
