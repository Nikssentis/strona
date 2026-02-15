"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0a2364]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div className="text-white">
            <span className="text-[#f59e0b] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
              Get In Touch With Us
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Ready to book your trip or have questions? Our team is available 24/7 to assist you with all your transportation needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1e4a8a] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-white/70">+48 123 456 789</p>
                  <p className="text-white/70">+48 987 654 321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1e4a8a] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-white/70">info@piktrans.pl</p>
                  <p className="text-white/70">booking@piktrans.pl</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1e4a8a] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-white/70">ul. Transportowa 15</p>
                  <p className="text-white/70">00-001 Warsaw, Poland</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1e4a8a] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Working Hours</h4>
                  <p className="text-white/70">24/7 - We never sleep!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#0a2364] mb-6">Request a Free Quote</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+48 123 456 789"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                  <input
                    type="text"
                    placeholder="City or address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <input
                    type="text"
                    placeholder="City or address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all bg-white">
                    <option>4-8 passengers</option>
                    <option>9-19 passengers</option>
                    <option>20-35 passengers</option>
                    <option>36-50 passengers</option>
                    <option>51-63 passengers</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your travel plans..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              <Button className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white py-6 rounded-xl font-semibold text-lg shadow-lg shadow-orange-500/30">
                Get Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
