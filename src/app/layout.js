import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-[url('/backgroung.jpg')] h-80 w-full bg-cover object-fill text-white `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
