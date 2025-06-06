import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-50 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Student Portal. All rights reserved.</p>
        <p className="text-xs mt-2">Developed by Group 4</p>
      </div>
    </footer>
  );
}

export default Footer;