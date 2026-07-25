"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Vision", href: "#vision" },
    { name: "Statement", href: "#statement" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMouse({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,.35)]"
          : ""
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "opacity-100 bg-[#090B14]/80"
            : "opacity-0 bg-transparent"
        }`}
      />

      {/* Grid */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          scrolled ? "opacity-[0.06]" : "opacity-0"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(108,98,255,.30), transparent 36%)`,
        }}
      />

      {/* Bottom Border */}
      <div
        className={`absolute bottom-0 left-0 w-full h-px transition-opacity duration-500 ${
          scrolled ? "opacity-100 bg-white/10" : "opacity-0"
        }`}
      />

      <div className="relative mx-auto max-w-[1700px] h-[70px] lg:h-[80px] px-4 sm:px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-2 lg:gap-3 flex-shrink-0"
        >
          <div className="relative h-[38px] w-[38px] lg:h-[44px] lg:w-[44px] overflow-hidden rounded-xl border border-[#7380FF]">

            <Image
              src="/photo.jpeg"
              alt="Profile"
              fill
              priority
              className="object-cover"
            />

          </div>

          <h1 className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold tracking-[-0.02em] text-white whitespace-nowrap">
            Urbanzi Solutions LLP
          </h1>

        </Link>
                {/* Desktop Navigation */}

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-14">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="
                    text-[16px]
                    font-medium
                    text-[#A4ABB8]
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-lg
            text-white
            transition-all
            duration-300
            hover:bg-white/10
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-[#090B14]/95 backdrop-blur-xl border-t border-white/10">

          <nav className="flex flex-col py-3">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  px-6
                  py-4
                  text-[16px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/5
                "
              >
                {item.name}
              </a>
            ))}

          </nav>

        </div>
      )}

    </header>
  );
}