"use client";

import { CheckCircle, Award, Users, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
                alt="Modern touring bus"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-[#0a2364] text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-[#f59e0b]">15+</div>
              <div className="text-sm">Years of Experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-[#f59e0b] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2364] mt-2 mb-6">
              Your Trusted Partner for European Travel
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              PIKTRANS has been providing premium passenger transportation services across Europe for over 15 years. We pride ourselves on safety, comfort, and reliability, making every journey memorable for our clients.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a2364] mb-1">Certified Excellence</h4>
                  <p className="text-gray-500 text-sm">ISO certified and fully licensed operator</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#22c55e]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a2364] mb-1">Safety First</h4>
                  <p className="text-gray-500 text-sm">Regular maintenance and safety checks</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#fef3c7] flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a2364] mb-1">Expert Team</h4>
                  <p className="text-gray-500 text-sm">Experienced and professional drivers</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f3e8ff] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a2364] mb-1">Wide Coverage</h4>
                  <p className="text-gray-500 text-sm">All major European destinations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
