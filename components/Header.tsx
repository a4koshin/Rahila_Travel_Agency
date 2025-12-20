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
    <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <h1 className="font-semibold text-xl text-blue-950">
            Rahila Travel Agency
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center">
          {navbar.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="px-3 text-sm font-semibold text-blue-950 hover:text-orange-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-2xl text-blue-950"
        >
          {isOpen ? <IoMdClose /> : <RiMenu5Line />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden mt-4 flex flex-col gap-3 rounded-xl bg-white shadow-md p-4">
          {navbar.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-blue-950 hover:text-orange-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
