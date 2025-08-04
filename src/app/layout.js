import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-80 w-full bg-cover object-fill text-white `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
