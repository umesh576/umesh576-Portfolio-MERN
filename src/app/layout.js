import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

// ✅ SEO Metadata for Personal Portfolio
export const metadata = {
  title: {
    default: "Umesh Joshi | MERN Stack Developer",
    template: "%s | Umesh Joshi",
  },
  description:
    "Umesh Joshi is a MERN Stack Developer specializing in modern web applications, backend systems, and scalable digital solutions.",
  keywords: [
    "Umesh Joshi",
    "MERN Stack Developer",
    "Next.js Developer",
    "Backend Developer Nepal",
    "Full Stack Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Umesh Joshi" }],
  creator: "Umesh Joshi",
  metadataBase: new URL("https://umeshjoshi.com.np"), // change if different
  openGraph: {
    title: "Umesh Joshi | MERN Stack Developer",
    description:
      "Professional portfolio of Umesh Joshi – Full Stack Developer building scalable web and mobile applications.",
    url: "https://umeshjoshi.com.np",
    siteName: "Umesh Joshi Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-12 py-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
