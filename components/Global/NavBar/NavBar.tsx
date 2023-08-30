"use client";

import { useAtom } from "jotai";
import { useState } from "react";
import { Link } from "react-daisyui";
import { HiMenu, HiMoon, HiOutlineX, HiSun } from "react-icons/hi";
import { loginModalAtom, signupModalAtom } from "../../../app/store";
import Button from "../Button";
import Container from "../Container";
import ProfileImage from "../ProfileImage";

const NavBar = ({
  setDarkTheme,
  isDarkTheme,
}: {
  setDarkTheme: (val: any) => any;
  isDarkTheme: boolean;
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoginModalShown, setIsLoginModalShown] = useAtom(loginModalAtom);
  const [isSignupModalOpen, setIsSignupModalOpen] = useAtom(signupModalAtom);

  const toggleNav = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
      return;
    }
    setIsNavOpen(true);
  };

  const toggleDarkTheme = () => {
    if (isDarkTheme) {
      setDarkTheme(false);
      localStorage.setItem("blog-theme", "light");

      return;
    }
    setDarkTheme(true);
    localStorage.setItem("blog-theme", "dark");
  };

  return (
    <nav className='sticky top-0 z-50 bg-base-100'>
      <div className='shadow-md border-b-gray-400 sticky top-0'>
        <Container className='flex justify-between items-center py-4'>
          <h2 className='text-xl lg:text-2xl font-bold uppercase'>Blog app</h2>

          <div className='space-x-4 hidden lg:block'>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Categories</Link>
            <Link href={"/"}>Business</Link>
            <Link href={"/"}>Sports</Link>
          </div>

          {/* Profile image if the user is logged in */}
          <div className='flex space-x-4 items-center lg:space-x-8'>
            {/* hidden for small screens */}
            <div className='hidden lg:flex space-x-6'>
              <Button
                onClick={() => setIsLoginModalShown(true)}
                className='rounded-lg px-4 font-bold text-primary block text-sm border border-primary'
              >
                Login
              </Button>
              <Button
                onClick={() => setIsSignupModalOpen(true)}
                className='rounded-lg text-white font-bold px-4 text-sm btn-primary'
              >
                Sign Up
              </Button>
            </div>

            {isDarkTheme ? (
              <HiSun onClick={toggleDarkTheme} className='w-6 h-6 cursor-pointer' />
            ) : (
              <HiMoon onClick={toggleDarkTheme} className='w-6 h-6 cursor-pointer' />
            )}

            <ProfileImage />

            {/* Menu icon for mobile screens */}
            {isNavOpen ? (
              <HiOutlineX onClick={toggleNav} className='w-6 h-6 lg:hidden c' />
            ) : (
              <HiMenu onClick={toggleNav} className='w-6 h-6 lg:hidden cursor-pointer' />
            )}
          </div>
        </Container>
      </div>

      {isNavOpen ? (
        <div className='absolute z-50 w-full bg-base-100 pb-8 lg:hidden'>
          <div className='lg:block'>
            <Link className='block py-3 px-6 border-b border-b-base-300' href={"/"}>
              Home
            </Link>
            <Link className='block py-3 px-6 border-b border-b-base-300' href={"/"}>
              Categories
            </Link>
            <Link className='block py-3 px-6 border-b border-b-base-300' href={"/"}>
              Business
            </Link>
            <Link className='block py-3 px-6 border-b border-b-base-300' href={"/"}>
              Sports
            </Link>
          </div>

          <div className='flex px-6 space-x-6 mt-6'>
            <Button
              onClick={() => setIsLoginModalShown(true)}
              className='rounded-lg px-4 py-2 font-bold text-primary block text-sm border border-primary'
            >
              Login
            </Button>
            <Link
              href={"/auth/signup"}
              onClick={() => setIsSignupModalOpen(true)}
              className='rounded-lg text-white font-bold px-4 py-2 text-sm btn-primary'
            >
              Sign Up
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
