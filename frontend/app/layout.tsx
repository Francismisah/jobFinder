import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JobFinder",
  description: "jobfinder app frontend created by lawal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
