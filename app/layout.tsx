import { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "../components/Global/NavBar/NavBar";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Blog App",
  description: "Read latest news ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme='dark' lang='en' className=''>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
