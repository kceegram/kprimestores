"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Perfumes", href: "/perfumes" },
  { label: "Watches",  href: "/watches"  },
  { label: "Blog",     href: "/blog"     },
  { label: "Contact",  href: "/contact"  },
];

const CAROUSEL_ITEMS = [
  "Perfumes — Discover Your Signature Scent",
  "Watches — Timeless Style",
  "Read Our Blog",
  "Get In Touch With Us",
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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');

        .nav-desktop-link {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #52525b;
          padding: 20px 16px;
          position: relative;
          display: block;
          white-space: nowrap;
          transition: color 0.25s ease;
        }
        .nav-desktop-link:hover { color: #f58c27; }
        .nav-desktop-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 16px; right: 16px;
          height: 2px;
          background: linear-gradient(90deg, #f58c27, #c86e10);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-desktop-link:hover::after { transform: scaleX(1); }

        .mobile-nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #52525b;
          display: flex;
          align-items: center;
          padding: 14px 16px;
          border-bottom: 1px solid #f3f4f6;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .mobile-nav-link:last-child { border-bottom: none; }
        .mobile-nav-link:hover { color: #f58c27; background: #fafafa; }
      `}</style>

      {/* ── ROW 1: Announcement strip ── */}
      <div className="border-b border-gray-200 bg-gray-50 py-2 md:py-3">

        {/* DESKTOP */}
        <div className="hidden md:flex max-w-7xl mx-auto px-6 items-center justify-center">
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: '#f58c27',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            Perfumes
            <span>·</span>
            Watches
          </span>
        </div>

        {/* MOBILE: logo left, hamburger right */}
        <div className="flex md:hidden items-center justify-between">
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
            className="text-zinc-600 hover:text-[#f58c27] transition-colors duration-200 p-5 flex-shrink-0 ml-auto"
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

      {/* ── ROW 2: Main nav bar (desktop only) ── */}
      <nav className="hidden md:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/kprimestore.img.png"
              alt="KPrime Store"
              width={250}
              height={42}
              className="object-contain"
            />
          </Link>

          {/* Nav links */}
          <ul className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="nav-desktop-link">
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
        {/* Rotating carousel strip */}
        <div className="flex items-center justify-center px-3 py-2 bg-gray-50 border-b border-gray-100 h-9 overflow-hidden">
          <span
            style={{
              opacity: fade ? 1 : 0,
              transform: fade ? "translateY(0)" : "translateY(-6px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              fontFamily: "'Jost', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: '#f58c27',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
            }}
          >
            <span>—</span>
            {CAROUSEL_ITEMS[carouselIndex]}
            <span>—</span>
          </span>
        </div>

        {/* Nav links */}
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="mobile-nav-link"
          >
            {item.label}
          </Link>
        ))}
      </div>

    </header>
  );
}