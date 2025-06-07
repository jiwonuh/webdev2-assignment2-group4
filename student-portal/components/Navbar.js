import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white py-4 h-20">
      <div className="container mx-auto flex justify-between items-center mt-2">
        <div className="text-lg font-bold">New Generation High Shool - Student Portal System</div>
        <ul className="flex space-x-10">
          <li><a href="/home" className="hover:underline">Home</a></li>
          <li><a href="/courses" className="hover:underline">Courses</a></li>
          <li><a href="/profile" className="hover:underline">Profile</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;