import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Student Portal</div>
        <ul className="flex space-x-20">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/courses" className="hover:underline">Courses</a></li>
          <li><a href="/profile" className="hover:underline">Profile</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;