import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer, Navbar } from "@/components";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Number Plates",
  description: "Discover Best Number Plates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden w-100 backgroundColor mx-auto ${geistSans.variable} ${geistMono.variable}`} style={{maxWidth:'1280px'}}>
        <Navbar />
        {children}
        <Footer/>
        <ToastContainer />
      </body>
    </html>
  );
}
