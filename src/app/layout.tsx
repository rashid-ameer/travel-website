// metadata
import type { Metadata } from "next";
// fonts
import { Inter } from "next/font/google";
// styles
import "./globals.css";
// components
import { Header, Footer } from "@/components/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HiLink.",
  description: "HiLink. is a travel website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-base text-gray-400`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
