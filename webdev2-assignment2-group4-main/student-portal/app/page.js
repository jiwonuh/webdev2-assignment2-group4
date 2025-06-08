'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen ">
      <main className="max-w-3xl mx-auto mt-24 px-6">
        <div className="bg-white p-10 rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Student Portal
          </h1>
          <p className="text-lg ">
            This is the homepage for New Generation High School.
          </p>
        </div>
      </main>
    </div>
  );
}
