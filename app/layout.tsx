import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Specifies character subsets
  weight: ["400", "500", "600", "700"], // Loads specific font weights
  variable: "--font-ibm-plex",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI powered image generator and optimizer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {" "}
      <html lang="en">
        <body
          className={`${cn(
            "font-ibmPlexSans antialiased",
            ibmPlexSans.variable
          )} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
