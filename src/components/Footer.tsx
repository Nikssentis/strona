"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050e1f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">PIK</span>
              <span className="text-2xl font-bold text-[#f59e0b]">TRANS</span>
              <span className="text-xs text-white/60 ml-2">sp. z o.o.</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional passenger transport across Europe. Safe, comfortable, and reliable travel for groups of all sizes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1e4a8a] flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1e4a8a] flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1e4a8a] flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1e4a8a] flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-white/60 hover:text-[#f59e0b] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="text-white/60 hover:text-[#f59e0b] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="#fleet" className="text-white/60 hover:text-[#f59e0b] transition-colors">Our Fleet</Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/60 hover:text-[#f59e0b] transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-[#f59e0b] transition-colors">Book a Trip</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/60 hover:text-[#f59e0b] transition-colors">Airport Transfers</Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-[#f59e0b] transition-colors">Corporate Travel</Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-[#f59e0b] transition-colors">Event Transport</Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-[#f59e0b] transition-colors">School Trips</Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-[#f59e0b] transition-colors">Private Hire</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-5">Contact Info</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <span className="text-[#f59e0b]">Phone:</span> +48 123 456 789
              </li>
              <li>
                <span className="text-[#f59e0b]">Email:</span> info@piktrans.pl
              </li>
              <li>
                <span className="text-[#f59e0b]">Address:</span> ul. Transportowa 15, 00-001 Warsaw, Poland
              </li>
              <li>
                <span className="text-[#f59e0b]">Hours:</span> 24/7 Available
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; 2024 PIKTRANS Sp. z o.o. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
