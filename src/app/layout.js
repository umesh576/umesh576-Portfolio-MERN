import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "@/component/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-80 w-full bg-cover object-fill text-white `}>
        <Navbar />
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
