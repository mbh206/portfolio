'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="grid grid-cols-[1fr_20%] md:flex justify-between w-full md:px-5 ml-5 px-1">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/logo.svg"
            alt="Mark Harris logo"
            width={60}
            height={38}
            priority
          />
        </Link>
        <div>
          <p className="text-xl md:text-3xl uppercase">
            <span className="dark:text-sky-400 text-sky-600 font-black">
              Mark
            </span>{' '}
            Harris
          </p>
          <p className="text-xs md:text-lg uppercase">Developer | Designer</p>
        </div>
      </div>
      <button
        className="relative mt-5 h-8 w-8 flex flex-col gap-1 items-right md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="toggle menu"
      >
        <span
          className={`block h-0.5 w-9 bg-white transform transition duration-300 ease-in-out origin-[72%] ${
            isMenuOpen ? '-rotate-45 transition-y-1' : ''
          }`}
        ></span>
        <span
          className={`block h-0.5 w-9 bg-white transform transition duration-300 ease-in-out origin-[72%] ${
            isMenuOpen ? '-rotate-45 transition-y-1' : ''
          }`}
        ></span>
        <span
          className={`block h-0.5 w-9 bg-white transform transition duration-300 ease-in-out origin-[72%] ${
            isMenuOpen ? 'rotate-45 transition-y-1' : ''
          }`}
        ></span>
        <span
          className={`block h-0.5 w-9 bg-white transform transition duration-300 ease-in-out origin-[72%] ${
            isMenuOpen ? 'rotate-45 transition-y-1' : ''
          }`}
        ></span>
      </button>
      <div
        className={`z-50 fixed top-0 left-0 w-full flex bg-sky-400 text-slate-700 font-black text-3xl flex-col items-center uppercase text-center bg- space-y-4 py-4 transition-transform duration-300 ease-in-out transform md:hidden ${isMenuOpen ? '-translate-x-0 top-20' : 'translate-x-full top-20'}`}
      >
        <ul>
          <li className="my-4">
            <Link href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Home
            </Link>
          </li>
          <li className="my-4">
            <Link href="projects" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Projects
            </Link>
          </li>
          <li className="my-4">
            <Link href="contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block md:text-xl mt-4 mr-5">
        <ul className="flex space-x-4 font-black">
          <li className="dark:hover:text-sky-400 hover:text-sky-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="dark:hover:text-sky-400 hover:text-sky-600 cursor-pointer">
            <Link href="projects">Projects</Link>
          </li>
          <li className="dark:hover:text-sky-400 hover:text-sky-600 cursor-pointer">
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
