"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Women",            href: "/women"          },
  { label: "Men",              href: "/men"            },
  { label: "Kids",             href: "/kids"           },
  { label: "Electronics",      href: "/electronics"    },
  { label: "Perfume & Beauty", href: "/perfume-beauty" },
];

const CAROUSEL_ITEMS = [
  "Thrift & New",
  "Fashion for Everyone",
  "Electronics & Gadgets",
  "Perfume & Beauty",
  "Shop Smart. Live Bold.",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCarouselIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">

      {/* ── ROW 1 ── */}
      <div className="border-b border-gray-200 bg-gray-50 py-2 md:py-3">

        {/* DESKTOP layout */}
        <div className="hidden md:flex max-w-7xl mx-auto px-6 items-center justify-center">
          <span className="text-[10px] tracking-[0.35em] uppercase text-gray-400 font-medium flex items-center gap-2">
            Thrift &amp; New
            <span className="text-[#c8954a]">—</span>
            Fashion
            <span className="text-[#c8954a]">·</span>
            Electronics
            <span className="text-[#c8954a]">·</span>
            Beauty
          </span>
        </div>

        {/* MOBILE layout — logo hard left, hamburger hard right */}
        <div className="flex md:hidden items-center justify-between ">
          <Link href="/" className="flex items-center -my-8">
            <Image
              src="/kprimestore.img.png"
              alt="KPrime Store"
              width={200}
              height={20}
              priority
              className="object-contain"
            />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-600 hover:text-[#c8954a] transition-colors duration-200 p-5 flex-shrink-0 ml-auto"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

      </div>

      {/* ── ROW 2: NAV BAR — logo left, bold categories right (desktop only) ── */}
      <nav className="hidden md:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo — Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/kprimestore.img.png"
              alt="KPrime Store"
              width={250}
              height={42}
              className="object-contain"
            />
          </Link>

          {/* Bold Categories — Right */}
          <ul className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative block px-4 py-4 text-[13px] font-bold tracking-wider uppercase text-gray-700
                             hover:text-[#c8954a] transition-colors duration-200 whitespace-nowrap
                             after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px]
                             after:bg-[#c8954a] after:scale-x-0 hover:after:scale-x-100
                             after:transition-transform after:duration-200 after:origin-left"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── MOBILE DROPDOWN ── */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out border-b border-gray-200 ${
          mobileOpen ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Rotating carousel strip — mobile only */}
        <div className="flex items-center justify-center px-3 py-2 bg-gray-50 border-b border-gray-100 h-9 overflow-hidden">
          <span
            style={{
              opacity: fade ? 1 : 0,
              transform: fade ? "translateY(0)" : "translateY(-6px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
            className="text-[10px] tracking-[0.35em] uppercase text-gray-400 font-medium flex items-center gap-2 whitespace-nowrap"
          >
            <span className="text-[#c8954a]">—</span>
            {CAROUSEL_ITEMS[carouselIndex]}
            <span className="text-[#c8954a]">—</span>
          </span>
        </div>

        {/* Nav links */}
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="flex items-center px-4 py-3.5 text-[13px] font-bold tracking-wider uppercase
                       text-gray-700 hover:text-[#c8954a] hover:bg-gray-50 border-b border-gray-100
                       last:border-0 transition-colors duration-150"
          >
            {item.label}
          </Link>
        ))}
      </div>

    </header>
  );
}