"use client";

import { Users, Wifi, AirVent, Tv, Coffee, Armchair } from "lucide-react";
import { Button } from "@/components/ui/button";

const fleet = [
  {
    name: "Minibus 8-19",
    capacity: "8-19 passengers",
    image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=600&q=80",
    features: ["Air Conditioning", "Comfortable Seats", "USB Charging"],
    description: "Perfect for small groups, airport transfers, and city tours."
  },
  {
    name: "Midibus 20-35",
    capacity: "20-35 passengers",
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=600&q=80",
    features: ["WiFi", "Air Conditioning", "Entertainment System"],
    description: "Ideal for medium-sized groups and corporate events."
  },
  {
    name: "Coach 36-63",
    capacity: "36-63 passengers",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80",
    features: ["WiFi", "Toilet", "Premium Seats", "TV Screens"],
    description: "Luxury coaches for long-distance travel and large groups."
  }
];

export function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#f59e0b] font-semibold text-sm uppercase tracking-wider">Our Fleet</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2364] mt-2 mb-4">
            Modern & Comfortable Vehicles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse fleet of modern vehicles is meticulously maintained to ensure your comfort and safety on every journey.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#f59e0b] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {vehicle.capacity}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2364] mb-2">{vehicle.name}</h3>
                <p className="text-gray-500 mb-4">{vehicle.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-[#f0f9ff] text-[#2563eb] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-colors"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
