import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Exterior Detail",
    price: "$99",
    description: "Perfect for regular maintenance",
    features: ["Hand wash & dry", "Tire shine", "Wax application", "Window cleaning"],
  },
  {
    name: "Interior Detail",
    price: "$129",
    description: "Deep clean inside",
    features: ["Full vacuum", "Upholstery shampoo", "Leather conditioning", "Dashboard detail", "Air freshening"],
    highlighted: true,
  },
  {
    name: "Full Detail",
    price: "$249",
    description: "Complete transformation",
    features: ["Exterior detail", "Interior detail", "Paint correction", "Ceramic wax", "Engine bay cleaning"],
  },
  {
    name: "Ceramic Coating",
    price: "$399",
    description: "2-year protection",
    features: ["Paint prep", "Ceramic application", "Curing process", "2-year warranty", "Maintenance kit"],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Transparent <span className="text-accent">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg">Professional detailing at competitive rates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-lg p-8 transition-all duration-300 overflow-hidden group ${
                plan.highlighted
                  ? "bg-accent text-black border-2 border-accent shadow-2xl shadow-accent/30 scale-105 hover:shadow-accent/50 hover:scale-110"
                  : "bg-black border border-gray-800 text-white hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2"
              }`}
            >
              {!plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4 py-1 rounded-full text-accent text-xs font-bold">
                  POPULAR
                </div>
              )}

              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-black" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-black/70" : "text-gray-400"}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? "text-black/70" : "text-gray-400"}`}> per service</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.highlighted ? "text-black" : "text-accent"}`} />
                      <span className={plan.highlighted ? "text-black" : "text-gray-300"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    plan.highlighted
                      ? "bg-black text-accent hover:bg-gray-900 hover:shadow-lg hover:shadow-black/50"
                      : "bg-accent text-black hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50"
                  }`}
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
