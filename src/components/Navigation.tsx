"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent backdrop-blur-sm py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="https://ext.same-assets.com/549901695/2060650607.svg"
            alt="BALAW"
            width={80}
            height={32}
            className="h-8 w-auto"
          />
          <div
            className={`hidden md:flex flex-col ${
              scrolled ? "text-navy-900" : "text-white"
            } opacity-90 group-hover:opacity-100 transition-opacity`}
          >
            <span className="font-bold text-sm leading-tight tracking-wide">
              Borderless, Accessible Law
            </span>
            <span className="text-[10px] font-light uppercase tracking-widest opacity-80">
              represents immediate access to law
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {[
            { href: "/services", label: "서비스 소개" },
            { href: "/solutions", label: "솔루션" },
            { href: "/professionals", label: "Professionals" },
            { href: "/contact", label: "문의하기" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-semibold transition-colors ${
                scrolled
                  ? "text-navy-900 hover:text-electric-500"
                  : "text-white hover:text-electric-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={scrolled ? "text-navy-900" : "text-white"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {[
              { href: "/services", label: "서비스 소개" },
              { href: "/solutions", label: "솔루션" },
              { href: "/professionals", label: "Professionals" },
              { href: "/contact", label: "문의하기" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-navy-900 font-semibold hover:text-electric-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
