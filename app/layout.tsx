import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import ExpandableFooter from "@/components/ExpandableFooter";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "CaltAI | Stop Prompting, Start Scaling",
  description: "CaltAI is an autonomous engine that turns business objectives into execution.",
};

import AIChatBox from "@/components/AIChatBox";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jakarta.variable} ${instrumentSerif.variable} antialiased font-sans`}>
        {children}
        <ExpandableFooter />
        <AIChatBox />
      </body>
    </html>
  );
}
