import type { Metadata } from "next";
import { Alata, Actor } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const alata = Alata({
  weight: "400",
  variable: "--font-alata",
  subsets: ["latin"],
});

const actor = Actor({
  weight: "400",
  variable: "--font-actor",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trial Template | Flat-Rate Trial Demonstratives",
  description: "Impactful graphics for mediation and trial. Premium medical and legal demonstratives built for clarity, persuasion, and high-stakes communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alata.variable} ${actor.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#051A3D] text-white selection:bg-gold selection:text-black" suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
