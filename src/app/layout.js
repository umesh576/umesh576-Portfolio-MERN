import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../component/Navbar";
import Footer from "@/component/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-80 w-full bg-cover object-fill text-black `}>
        <Navbar />
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
