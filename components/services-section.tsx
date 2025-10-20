"use client"

import { useState } from "react"
import { Sparkles, Droplets, Shield, Wind } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Exterior Detailing",
    description: "Complete exterior wash, wax, and polish for a showroom shine",
    icon: Sparkles,
    features: ["Hand wash", "Clay bar treatment", "Premium wax"],
  },
  {
    id: 2,
    name: "Interior Detailing",
    description: "Deep clean of all interior surfaces and upholstery",
    icon: Wind,
    features: ["Vacuum & shampoo", "Leather conditioning", "Air freshening"],
  },
  {
    id: 3,
    name: "Ceramic Coating",
    description: "Professional-grade ceramic protection for long-lasting shine",
    icon: Shield,
    features: ["9H hardness", "2-year protection", "Hydrophobic finish"],
  },
  {
    id: 4,
    name: "Paint Correction",
    description: "Remove swirls, scratches, and oxidation from your paint",
    icon: Droplets,
    features: ["Swirl removal", "Scratch repair", "Paint restoration"],
  },
]

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional detailing solutions tailored to your vehicle's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative bg-black border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 cursor-pointer"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-500 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
