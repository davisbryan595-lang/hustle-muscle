"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    before: "https://images.pexels.com/photos/4870739/pexels-photo-4870739.jpeg?w=800&h=600&fit=crop",
    after: "https://images.pexels.com/photos/7154623/pexels-photo-7154623.jpeg?w=800&h=600&fit=crop",
    title: "Full Exterior Detail",
  },
  {
    id: 2,
    before: "https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?w=800&h=600&fit=crop",
    after: "https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg?w=800&h=600&fit=crop",
    title: "Interior Deep Clean",
  },
  {
    id: 3,
    before: "https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?w=800&h=600&fit=crop",
    after: "https://images.pexels.com/photos/31124682/pexels-photo-31124682.jpeg?w=800&h=600&fit=crop",
    title: "Professional Ceramic Coating",
  },
]

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
  }

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const currentItem = galleryItems[currentIndex]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Before & <span className="text-accent">After</span>
          </h2>
          <p className="text-gray-400 text-lg">See the transformation our detailing brings to every vehicle</p>
        </div>

        {/* Main slider */}
        <div className="mb-12">
          <div
            className="relative w-full h-96 rounded-lg overflow-hidden cursor-col-resize bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
            onMouseMove={handleSliderChange}
            onClick={handleSliderChange}
          >
            {/* After image (background) */}
            <img
              src={currentItem.after || "/placeholder.svg"}
              alt="After detailing"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before image (overlay) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
              <img
                src={currentItem.before || "/placeholder.svg"}
                alt="Before detailing"
                className="w-full h-full object-cover"
                style={{ width: `${(100 / sliderPosition) * 100}%` }}
              />
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-black p-2 rounded-full">
                <ChevronLeft className="w-4 h-4 inline" />
                <ChevronRight className="w-4 h-4 inline" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded text-white text-sm font-semibold">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded text-white text-sm font-semibold">
              After
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mt-6 text-center">{currentItem.title}</h3>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="p-3 bg-accent text-black rounded-full hover:bg-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-accent w-8 h-3 shadow-lg shadow-accent/50"
                    : "bg-gray-600 w-3 h-3 hover:bg-gray-500 hover:scale-125"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-accent text-black rounded-full hover:bg-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
