"use client";

import clsx from "clsx";
import { useAtom } from "jotai";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import Footer from "../components/Global/Footer/Footer";
import LoginModal from "../components/Global/Modal/LoginModal/LoginModal";
import SignupModal from "../components/Global/Modal/SignupModal/SignupModal";
import NavBar from "../components/Global/NavBar/NavBar";
import "./globals.css";
import { loginModalAtom, signupModalAtom } from "./store";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

// export const metadata: Metadata = {
//   title: "Blog App",
//   description: "Read latest news ",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoginModalShown, setIsLoginModalShown] = useAtom(loginModalAtom);
  const [isSignupModalOpen, setIsSignupModalOpen] = useAtom(signupModalAtom);

  useEffect(() => {
    const theme = localStorage.getItem("blog-theme");
    if (theme === "dark") {
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  }, []);

  return (
    <html data-theme={clsx(isDarkTheme ? "dark" : "light")} lang='en' className=''>
      <body className={inter.className}>
        <NavBar isDarkTheme={isDarkTheme} setDarkTheme={setIsDarkTheme} />
        {children}
        <Footer />

        {/* THE MODAL */}
        {isLoginModalShown ? <LoginModal /> : null}

        {isSignupModalOpen ? <SignupModal /> : null}
      </body>
    </html>
  );
}
