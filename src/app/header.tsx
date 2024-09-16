"use client"
import React, { useState } from 'react';
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

export default function Header() {
  
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  return (
    <BlurFade
      delay={0}
      duration={0.7}
      inView
      className="px-4 lg:px-6 h-16 flex items-center bg-gradient-to-b from-black/80 to-black/10 text-primary-foreground"
    >
      <div className="lg:hidden ml-auto">
        <button onClick={toggleSidebar} className="block text-white focus:text-gray-200 focus:outline-none" aria-label="Toggle navigation">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {showSidebar && <div className={`lg:hidden mt-16 fixed inset-y-0 right-0 w-full z-50 transform transition-transform ease-in-out ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <text className='text-white font-semibold py-4 pl-3 text-xl'>
            Main Menu
          </text>
          <div className='border border-white'></div>
          <Link href="#home" className="text-lg text-white px-5 py-3">Home</Link>
          <Link href="#about" className="text-lg text-white px-5 py-3">About</Link>
          <Link href="#services" className="text-lg text-white px-5 py-3">Services</Link>
          <Link href="#achievements" className="text-lg text-white px-5 py-3">Achievements</Link>
          <Link href="#contact" className="text-lg text-white px-5 py-3">Contact</Link>
        </div>
      </div>}

      <nav className="hidden mx-auto lg:flex gap-4 sm:gap-10 pt-4">
        <Link href="#home" className="text-sm lg:text-lg tracking-wider font-thin hover:underline hover:font-medium underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="#about" className="text-sm lg:text-lg tracking-wider font-thin hover:underline hover:font-medium underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#services" className="text-sm lg:text-lg tracking-wider font-thin hover:underline hover:font-medium underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href="#achievements" className="text-sm lg:text-lg tracking-wider font-thin hover:underline hover:font-medium underline-offset-4" prefetch={false}>
          Achievements
        </Link>
        <Link href="#contact" className="text-sm lg:text-lg tracking-wider font-thin hover:underline hover:font-medium underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </BlurFade>
  );
}

function BriefcaseIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    )
  }
  
