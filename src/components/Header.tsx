"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#0a2364] rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-white">
                  <path d="M8 6v6m0 0v6m0-6h8m-8 0H4m4-6h8a2 2 0 012 2v10a2 2 0 01-2 2H8" />
                  <circle cx="7" cy="18" r="2" fill="currentColor" />
                  <circle cx="17" cy="18" r="2" fill="currentColor" />
                  <path d="M5 12h14a2 2 0 012 2v4M3 12V8a2 2 0 012-2h14" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#0a2364]">PIK</span>
                <span className="text-2xl font-bold text-[#f59e0b]">TRANS</span>
                <div className="text-xs text-gray-500 -mt-1">sp. z o.o.</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-[#1e3a5f] font-medium hover:text-[#2563eb] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-[#1e3a5f] font-medium hover:text-[#2563eb] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#fleet"
              className="text-[#1e3a5f] font-medium hover:text-[#2563eb] transition-colors"
            >
              Fleet
            </Link>
            <Link
              href="#contact"
              className="text-[#1e3a5f] font-medium hover:text-[#2563eb] transition-colors"
            >
              Contact
            </Link>
            <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2 rounded-full font-semibold">
              Book Your Trip
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#1e3a5f]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1e3a5f]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link
                href="#about"
                className="text-[#1e3a5f] font-medium hover:text-[#2563eb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-[#1e3a5f] font-medium hover:text-[#2563eb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#fleet"
                className="text-[#1e3a5f] font-medium hover:text-[#2563eb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fleet
              </Link>
              <Link
                href="#contact"
                className="text-[#1e3a5f] font-medium hover:text-[#2563eb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2 rounded-full font-semibold w-fit">
                Book Your Trip
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
