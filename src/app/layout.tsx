import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import OverLayText from "@/components/atoms/fab";  // this overalys a text box over web

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created using Next.js, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} flex flex-col justify-between h-screen bg-slate-200 overflow-x-hidden customCursor`}>
        <div>
          {children}
        </div>
        <div className="fixed left-0 bottom-0 w-full z-[50]">
          <OverLayText/>
        </div>
      </body>
    </html>
  );
}