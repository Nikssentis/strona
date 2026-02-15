"use client";

import { Plane, Building, PartyPopper, GraduationCap, Briefcase, Heart } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Reliable and punctual airport pickup and drop-off services across all major European airports.",
    color: "bg-[#3b82f6]"
  },
  {
    icon: Building,
    title: "Corporate Travel",
    description: "Professional transportation solutions for business meetings, conferences, and corporate events.",
    color: "bg-[#0a2364]"
  },
  {
    icon: PartyPopper,
    title: "Event Transport",
    description: "Seamless group transportation for weddings, concerts, festivals, and special occasions.",
    color: "bg-[#f59e0b]"
  },
  {
    icon: GraduationCap,
    title: "School Trips",
    description: "Safe and comfortable transportation for educational excursions and student groups.",
    color: "bg-[#22c55e]"
  },
  {
    icon: Briefcase,
    title: "Tour Services",
    description: "Customized touring packages with experienced drivers who know the best routes.",
    color: "bg-[#8b5cf6]"
  },
  {
    icon: Heart,
    title: "Private Hire",
    description: "Exclusive vehicle hire for family trips, group holidays, and special journeys.",
    color: "bg-[#ec4899]"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#f59e0b] font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2364] mt-2 mb-4">
            Comprehensive Transport Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From airport transfers to corporate events, we offer a wide range of professional transportation services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0a2364] mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
