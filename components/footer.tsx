import { Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50">
                <span className="text-black font-bold">💪</span>
              </div>
              <span className="text-white font-bold text-lg">HUSTLE MUSCLE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium mobile auto detailing for Wilmington, NC and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">
                  Exterior Detailing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">
                  Interior Detailing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">
                  Paint Correction
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent transition-transform duration-300 group-hover:scale-110" />
                <a href="tel:(910)386-9530" className="hover:text-accent transition-all duration-300">
                  (910) 386-9530
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Wilmington, NC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 Hustle Muscle. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-125 hover:drop-shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-125 hover:drop-shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-125 hover:drop-shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
