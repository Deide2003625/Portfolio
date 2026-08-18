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
  title: "GAHOU Chédide - Développeuse Full Stack",
  description: "Portfolio de GAHOU Chédide, développeuse Full Stack. Spécialisée en Next.js, React, Node.js, et développement web moderne.",
  keywords: ["Développeuse Full Stack", "Next.js", "React", "Node.js", "TypeScript", "Portfolio", "GAHOU Chédide"],
  authors: [{ name: "GAHOU Chédide" }],
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "GAHOU Chédide - Développeuse Full Stack",
    description: "Portfolio de GAHOU Chédide, développeuse Full Stack",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
