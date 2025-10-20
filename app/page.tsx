"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import PricingSection from "@/components/pricing-section"
import BookingSection from "@/components/booking-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
