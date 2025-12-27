import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FirePro | Expert Fire Safety & Security Solutions",
  description: "FirePro provides expert fire safety, oil spill cleanup, and security solutions. Ensuring public safety and property protection from fire-related hazards.",
  keywords: "fire safety, fire prevention, fire suppression, fire alarm installation, fire safety training, emergency planning, oil spill cleanup, security solutions",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firepro.com",
    title: "FirePro | Expert Fire Safety & Security Solutions",
    description: "Professional fire safety and security services available 24/7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#dc2626" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
