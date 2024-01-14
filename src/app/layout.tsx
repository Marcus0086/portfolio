import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import NavBar from "@/components/navBar";

import "styles/globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { metaData } from "@/components/constants";

import bulb from "../../public/bulb.svg";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="bg-light font-medium w-full min-h-screen">
            <NavBar />
            <div className="w-full h-full inline-block z-0 bg-light p-32">
              {children}
            </div>
            <div className="w-24 fixed right-8 bottom-8 inline-block">
              <Image src={bulb} alt="light bulb" className="w-full h-auto" />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
