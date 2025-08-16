import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../component/Navbar";
import Footer from "@/component/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative w-full">
          <Navbar />
        </div>
        <div className="relative ">{children}</div>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
