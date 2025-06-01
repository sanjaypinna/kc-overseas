"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icon library or use your own SVG

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavigationData = [
    { name: "Study Destinations", href: "/" },
    { name: "Services", href: "#" },
    { name: "Company", href: "#" },
    { name: "Upcoming Events", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <div className="bg-[#6C48F0] w-full p-5 text-white sticky top-0 z-50">
      <div className="container m-auto flex justify-between items-center">
        <a href="">
          <Image src="/kc.svg" alt="logo" width={100} height={45} />
        </a>
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 items-center font-semibold">
          {NavigationData.map((item) => (
            <a key={item.name} href={item.href} className="hover:underline">
              {item.name}
            </a>
          ))}
          <button className="border border-white hover:bg-white hover:text-[#6C48F0] px-4 py-1 rounded">
            Course Finder
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute  m-auto top-16 left-0 w-full h-[100vh] bg-white text-black px-6 py-6 z-50 lg:hidden">
          <div className="container m-auto flex  gap-4 flex-col">
            {NavigationData.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2"
              >
                {item.name}
              </a>
            ))}

            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-2 w-fit rounded text-center">
              Course Finder
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
