import { UserProvider } from '@auth0/nextjs-auth0/client';

import { Geist, Geist_Mono, Bonheur_Royale } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bonheurRoyale = Bonheur_Royale({
  variable: "--font-bonheur-royale",
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "The Seer",
  description: "Peer past the veil and glimpse beyond",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      <body className={`${geistSans.variable} ${geistMono.variable} ${bonheurRoyale.variable}`}>
        {children}
      </body>
      </UserProvider>
    </html>
  );
}
