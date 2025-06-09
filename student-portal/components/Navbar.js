'use client';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">New Generation High School</h1>
        <ul className="flex space-x-6">
          <li><Link href={`${basePath}/`}>Home</Link></li>
          <li><Link href={`${basePath}/Student_List`}>Student List</Link></li>
          <li><Link href={`${basePath}/Add_Student`}>Add Student</Link></li>
        </ul>
      </div>
    </nav>
  );
}
