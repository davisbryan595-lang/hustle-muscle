"use client"

import { useState } from "react"
import { Phone, Calendar } from "lucide-react"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?w=1920&h=1080&fit=crop')",
          opacity: 0.35,
        }}
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
            className="relative px-8 py-4 bg-accent text-black font-bold text-lg rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href="tel:+19103869530"
            className="relative px-8 py-4 border-2 border-accent text-accent font-bold text-lg rounded-lg hover:bg-accent hover:text-black transition-all duration-300 flex items-center gap-2 overflow-hidden group hover:shadow-lg hover:shadow-accent/50 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </span>
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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
