import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaan Kırman's Portfolio",
  icons: [{ rel: "icon", href: "/favicon.ico", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <body id="about" className="bg-neutral-900 relative">
        <div className="header-container">
          <div className="header-content">
            <h1 className="header-title">
              Kaan{" "}
              <span
                className="header-title-span"
                style={{ textShadow: "0 0 30px #a855f7 " }}
              >
                Kırman
              </span>
            </h1>
            <div className="header-links">
              <Link href="#about" className="header-link">
                About
              </Link>
              <Link href="#projects" className="header-link">
                Projects
              </Link>
              <Link href="#timeline" className="header-link">
                Timeline
              </Link>
              <Link href="#contact" className="header-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
        {children}
        <iframe
          src="https://ajanai-test.k2msoftware.com/embed"
          className="fixed bottom-4 right-4 w-[400px] h-[500px] bg-transparent rounded-lg overflow-hidden"
          style={{ zIndex: 1000 }}
        />
      </body>
    </html>
  );
}