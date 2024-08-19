import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaan Kırman's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="about" className="bg-neutral-900">
        <div className="w-full h-24 rounded-b-lg flex items-center justify-center text-white sticky top-0 bg-white bg-opacity-10 backdrop-blur-md border-b shadow-md shadow-purple-400 z-50">
          <div className="flex flex-row w-[1280px] items-center justify-between px-4">
            <h1 className="text-5xl hover:animate-pulse cursor-default">
              Kaan{" "}
              <span
                className="text-purple-200 bg-clip-text drop-shadow-lg"
                style={{ textShadow: "0 0 30px #7e22ce" }}
              >
                Kırman
              </span>
            </h1>
            <div className="flex flex-row gap-5 text-3xl ">
              <Link
                href="#about"
                className="transition duration-300 hover:text-purple-600 cursor-pointer hover:-translate-y-1"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition duration-300 hover:text-purple-600 cursor-pointer hover:-translate-y-1"
              >
                Projects
              </Link>
              <Link
                href="#timeline"
                className="transition duration-300 hover:text-purple-600 cursor-pointer hover:-translate-y-1"
              >
                Timeline
              </Link>
              <Link
                href="#contact"
                className="transition duration-300 hover:text-purple-600 cursor-pointer hover:-translate-y-1"
              >
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
