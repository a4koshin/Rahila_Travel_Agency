"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navbar } from "@/lib/navigation";
import { RiMenu5Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-24 h-24 overflow-hidden rounded-xl p-2 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Rahila Travel Agency Logo"
                fill
                className="object-contain p-1"
                sizes="(max-width: 768px) 48px, 56px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-blue-950 tracking-tight">
                Rahila Travel
              </span>
              <span className="text-xs text-gray-500 font-medium">Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navbar.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-400 transition-colors duration-200 group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-x-3 bottom-1 h-0.5 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2.5 rounded-xl bg-blue-50 text-blue-950 hover:bg-blue-100 transition-colors duration-200"
          >
            {isOpen ? (
              <IoMdClose className="text-xl" />
            ) : (
              <RiMenu5Line className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pb-4 pt-2 space-y-1">
            {navbar.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
              >
                <span className="ml-2">{item.name}</span>
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
            <div className="px-4 pt-4 border-t border-gray-100">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-sm rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md active:scale-95">
                Book Your Trip
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
