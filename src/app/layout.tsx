import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body id="about" className="bg-neutral-900">
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
      </body>
    </html>
  );
}