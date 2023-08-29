"use client";

import { useState } from "react";
import { Link } from "react-daisyui";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Container from "../Container";
import ProfileImage from "../ProfileImage";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
      return;
    }
    setIsNavOpen(true);
  };

  return (
    <nav className='relative'>
      <div className='shadow-md border-b-gray-400'>
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
              <Link
                href={"/auth/signin"}
                className='rounded-lg px-4 py-2 font-bold text-primary block text-sm border border-primary'
              >
                Login
              </Link>
              <Link
                href={"/auth/signup"}
                className='rounded-lg text-white font-bold px-4 py-2 text-sm btn-primary'
              >
                Sign Up
              </Link>
            </div>

            <ProfileImage />

            {/* Menu icon for mobile screens */}
            {isNavOpen ? (
              <HiOutlineX onClick={toggleNav} className='w-6 h-6 lg:hidden' />
            ) : (
              <HiMenu onClick={toggleNav} className='w-6 h-6 lg:hidden' />
            )}
          </div>
        </Container>
      </div>

      {isNavOpen ? (
        <div className='absolute w-full bg-base-100 pb-8 lg:hidden'>
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
            <Link
              href={"/auth/signin"}
              className='rounded-lg px-4 py-2 font-bold text-primary block text-sm border border-primary'
            >
              Login
            </Link>
            <Link
              href={"/auth/signup"}
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
