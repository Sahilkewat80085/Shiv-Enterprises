import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHIV ENTERPRISES - Security & Power Solutions",
  description: "CCTV Installation, Solar Systems, Biometric Access, EPBX & Power Backup Solutions for Homes and Businesses. Safety • Security • Trust — With SHIV ENTERPRISES.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
