"use client";

import clsx from "clsx";
import { Poppins } from "next/font/google";
import { useState } from "react";
import NavBar from "../components/Global/NavBar/NavBar";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

// export const metadata: Metadata = {
//   title: "Blog App",
//   description: "Read latest news ",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <html data-theme={clsx(isDarkTheme ? "dark" : "light")} lang='en' className=''>
      <body className={inter.className}>
        <NavBar isDarkTheme={isDarkTheme} setDarkTheme={setIsDarkTheme} />
        {children}
      </body>
    </html>
  );
}
