'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-evenly">
      <div className="w-full flex justify-center md:justify-normal items-center gap-8">
        <Link href="/">
          <Image
            className="mt-3 dark:invert animate-slowspin hover:[animation-play-state:paused]"
            src="/logo.svg"
            alt="Mark Harris logo"
            width={30}
            height={38}
            priority
          />
        </Link>
        <div>
          <p className="text-xl md:text-2xl uppercase m-0 mt-3">
            Mark{' '}
            <span className="dark:text-sky-400 text-sky-600 font-black">
              Harris
            </span>
            <span className="uppercase text-sm"></span>
          </p>
        </div>
        <button
          className="relative mt-5 h-8 w-8 flex flex-col gap-1 items-right md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block h-0.5 w-9 bg-sky-600 transform transition duration-300 ease-in-out origin-[72%] ${
              isMenuOpen ? '-rotate-45 transition-y-1' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-9 bg-sky-600 transform transition duration-300 ease-in-out origin-[72%] ${
              isMenuOpen ? '-rotate-45 transition-y-1' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-9 bg-sky-600 transform transition duration-300 ease-in-out origin-[72%] ${
              isMenuOpen ? 'rotate-45 transition-y-1' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-9 bg-sky-600 transform transition duration-300 ease-in-out origin-[72%] ${
              isMenuOpen ? 'rotate-45 transition-y-1' : ''
            }`}
          ></span>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`z-50 fixed top-0 left-0 w-full h-full flex bg-sky-900 text-slate-700 font-black text-3xl flex-col items-center uppercase text-center space-y-4 py-4 transition-transform duration-300 ease-in-out transform md:hidden ${
          isMenuOpen ? '-translate-x-0 top-20' : 'translate-x-full top-20'
        }`}
      >
        <ul>
          <li className="my-4">
            <Link href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Home
            </Link>
          </li>
          <li className="my-4">
            <Link href="contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block md:text-xl mt-4 mr-5 uppercase">
        <ul className="flex space-x-4 font-black">
          <li className="dark:hover:text-sky-300 hover:text-sky-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="dark:hover:text-sky-300 hover:text-sky-600 cursor-pointer">
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
