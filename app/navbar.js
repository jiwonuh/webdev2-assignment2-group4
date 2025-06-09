'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link href="/">
          <span className="navbarMenu">Main</span>
        </Link>
        <Link href="/about">
          <span className="navbarMenu">About</span>
        </Link>
        <Link href="/contact">
          <span className="navbarMenu">Contact</span>
        </Link>
      </div>
    </div>
  );
}
