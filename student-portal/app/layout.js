import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

export const metadata = {
  title: "Student Portal",
  description: "A simple student portal application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}