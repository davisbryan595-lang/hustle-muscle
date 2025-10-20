import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import { lazyAboutSection, lazyServicesSection, lazyGallerySection, lazyPricingSection, lazyBookingSection } from "@/lib/lazy-section"
import Footer from "@/components/footer"

const AboutSection = lazyAboutSection
const ServicesSection = lazyServicesSection
const GallerySection = lazyGallerySection
const PricingSection = lazyPricingSection
const BookingSection = lazyBookingSection

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
