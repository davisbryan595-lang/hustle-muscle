"use client"

import { useState } from "react"
import { Phone, Calendar } from "lucide-react"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1920&h=1080&fit=crop')",
          opacity: 0.3,
        }}
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8 inline-block">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">💪</span>
            </div>
            <span className="text-accent text-sm font-semibold tracking-widest">HUSTLE MUSCLE</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Detailing That Works
          <br />
          <span className="text-accent">As Hard As You Do</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Premium mobile auto detailing for Wilmington, NC and surrounding areas. Professional results, delivered to
          your door.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative px-8 py-4 bg-accent text-black font-bold text-lg rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Now
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          <a
            href="tel:(910)386-9530"
            className="px-8 py-4 border-2 border-accent text-accent font-bold text-lg rounded-lg hover:bg-accent hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>

        {/* Phone number */}
        <p className="mt-8 text-gray-400 text-sm">📞 (910) 386-9530 • Available 7 days a week</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
