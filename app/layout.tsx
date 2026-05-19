import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillForge.dev",
  description: "Build and learn with SkillForge.dev",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="SkillForge.dev logo"
                width={36}
                height={36}
              />
              <span className="text-lg font-bold text-black dark:text-white">
                SkillForge.dev
              </span>
            </Link>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
              >
                About
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
