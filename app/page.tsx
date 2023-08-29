import { Metadata } from "next";
import HomePage from "../components/Pages/HomePage/HomePage";

export const metadata: Metadata = {
  title: "Blog App",
  description: "This is a Blog app",
};

export default function Home() {
  return (
    <main className=''>
      <HomePage />
    </main>
  );
}
