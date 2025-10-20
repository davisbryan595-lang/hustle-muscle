export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="text-accent">Hustle Muscle</span>
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We believe in hard work, dedication, and delivering premium results. Every vehicle that comes through our
              service receives the same level of attention and care—because your car deserves the best.
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With years of experience in professional auto detailing, we've perfected our craft to bring
              showroom-quality results directly to your driveway. From ceramic coatings to deep interior cleaning, we
              handle every detail with precision.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <p className="text-gray-400">Vehicles Detailed</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">5★</div>
                <p className="text-gray-400">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601584942197-04bbb2b033d7?w=800&h=600&fit=crop"
              alt="Professional detailing in progress"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
