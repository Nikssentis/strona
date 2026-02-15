"use client";

import { Button } from "@/components/ui/button";
import { Bus, Clock, Euro, Star, ShieldCheck, Users, Globe, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden">
      {/* Background with gradient and bus image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2364] via-[#1e4a8a] to-[#3b82f6]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            mixBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2364]/90 via-[#1e4a8a]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Travel Safely &<br />
              Comfortably<br />
              <span className="text-[#f59e0b]">Across Europe</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg">
              Professional passenger transport for groups of 4-63 travelers. Modern fleet, experienced drivers, competitive prices.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Licensed & Insured</p>
                  <p className="text-sm text-white/70">Fully certified transport</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Any Group Size</p>
                  <p className="text-sm text-white/70">4 to 63 passengers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#06b6d4] flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">International Routes</p>
                  <p className="text-sm text-white/70">Domestic & cross-border</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-6 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg shadow-orange-500/30">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="bg-[#1e3a5f] hover:bg-[#1e3a5f]/80 text-white border-none px-8 py-6 rounded-full font-semibold text-lg">
                View Our Fleet
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Modern Card */}
            <div className="glass-card rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b] flex items-center justify-center mb-4">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Modern</h3>
              <p className="text-white/80 text-sm">Latest model vehicles with premium amenities</p>
            </div>

            {/* 24/7 Card */}
            <div className="glass-card rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#3b82f6] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-white/80 text-sm">Round-the-clock availability for your travel needs</p>
            </div>

            {/* Affordable Card */}
            <div className="glass-card rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#22c55e] flex items-center justify-center mb-4">
                <Euro className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Affordable</h3>
              <p className="text-white/80 text-sm">Competitive pricing for quality service</p>
            </div>

            {/* Pro Drivers Card */}
            <div className="glass-card rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b] flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro Drivers</h3>
              <p className="text-white/80 text-sm">Experienced, licensed professionals</p>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 rounded-full bg-[#3b82f6]" />
          <div className="w-3 h-3 rounded-full bg-white/40" />
          <div className="w-3 h-3 rounded-full bg-white/40" />
          <div className="w-3 h-3 rounded-full bg-white/40" />
          <div className="w-3 h-3 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
