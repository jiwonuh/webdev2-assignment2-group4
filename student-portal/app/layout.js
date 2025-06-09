import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import './globals.css';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

export const metadata = {
  title: 'Student Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        <main style={{ padding: '2rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
