import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";

import NavBar from "@/components/navBar";
import { ThemeProvider } from "@/components/themeProvider";
import { metaData } from "@/components/constants";
import Footer from "@/components/footer";

import bulb from "../../public/bulb.svg";
import "styles/globals.css";

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
          <main className="font-medium w-full min-h-screen">
            <NavBar />
            <div className="w-full h-full inline-block z-0 p-8 xl:p-32 lg:p-24 md:p-16 sm:p-12">
              {children}
            </div>
            <div className="w-24 fixed right-0 md:right-8 bottom-8 inline-block">
              <Image
                src={bulb}
                alt="light bulb"
                className="w-1/2 md:w-full h-auto"
              />
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
