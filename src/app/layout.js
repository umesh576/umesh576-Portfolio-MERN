import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../component/Navbar";
import Footer from "@/component/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar always at top */}
        <div className="w-full">
          <Navbar />
        </div>

        {/* Main content grows and stays responsive */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-12 py-6">
          {children}
        </main>

        {/* Footer sticks to bottom */}
        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
