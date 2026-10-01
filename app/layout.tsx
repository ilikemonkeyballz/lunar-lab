import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lunar Agricultural Laboratory",
  description: "A modular research platform for studying plant growth in lunar-relevant environments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-navy/15 py-8">
          <div className="wrap label flex flex-wrap justify-between gap-2 text-navy/60">
            <span>Lunar Agricultural Lab</span>
            <span>Controlled environment / Research platform</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
