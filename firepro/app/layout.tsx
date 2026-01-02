import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "FirePro | Expert Fire Safety & Security Solutions",
  description: "FirePro provides expert fire safety, oil spill cleanup, and security solutions. Ensuring public safety and property protection from fire-related hazards.",
  keywords: "fire safety, fire prevention, fire suppression, fire alarm installation, fire safety training, emergency planning, oil spill cleanup, security solutions",
  authors: [{ name: "FirePro" }],
  creator: "FirePro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firepro.com",
    siteName: "FirePro",
    title: "FirePro | Expert Fire Safety & Security Solutions",
    description: "Professional fire safety, oil spill cleanup, and security solutions available 24/7",
    images: [
      {
        url: "/Firepro1.jpg",
        width: 1200,
        height: 630,
        alt: "FirePro Fire Safety Services",
        type: "image/jpeg",
      },
      {
        url: "/logo-full.svg",
        width: 300,
        height: 100,
        alt: "FirePro Logo",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FirePro | Expert Fire Safety & Security Solutions",
    description: "Professional fire safety, oil spill cleanup, and security solutions available 24/7",
    images: ["/Firepro1.jpg"],
    creator: "@firepro",
  },
  alternates: {
    canonical: "https://firepro.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            try {
              const stored = localStorage.getItem('firepro-theme');
              const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              // next-themes stores as plain string
              let isDark = false;
              if (stored === 'dark') {
                isDark = true;
              } else if (stored === 'light') {
                isDark = false;
              } else if (stored === 'system' || stored === null) {
                isDark = systemDark;
              }
              
              // next-themes only uses "dark" class or no class for light
              if (isDark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          })()
        `}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
