import { Link } from "react-router-dom";

const VerticalsSection = () => {
  const verticals = [
    {
      name: "Ingredient Sourcing & Risk Management Analysis",
      path: "/sourcing-risk",
      icon: "🌾📊",
      description:
        "Comprehensive supply chain optimization combined with advanced risk management to ensure sustainable, reliable, and secure business operations.",
      features: [
        "Supply Chain Optimization",
        "Risk Assessment & Mitigation",
        "Vendor Management",
        "Compliance Management",
      ],
    },
    {
      name: "Project Management",
      path: "/projects",
      icon: "🎯",
      description:
        "Complete project orchestration ensuring seamless execution from initial concept through final delivery.",
      features: [
        "Project Planning",
        "Resource Management",
        "Timeline Optimization",
        "Quality Delivery",
      ],
    },
    {
      name: "House Keeping Products",
      path: "/housekeeping",
      icon: "🏠",
      description:
        "Comprehensive product lifecycle management and retention solutions to maximize your product portfolio value.",
      features: [
        "Product Lifecycle Management",
        "Retention Strategies",
        "Portfolio Optimization",
        "Quality Assurance",
      ],
    },
  ];

  return (
    <section
      id="verticals"
      className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-100/40 via-white/0 to-emerald-100/40 pointer-events-none"></div>
      {/* Blurred shape for depth */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-200/30 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Three Pillars of Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Specialized domains where we drive transformation and deliver
            exceptional results for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((vertical) => (
            <div
              key={vertical.path}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-emerald-200 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {vertical.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    {vertical.name}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {vertical.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {vertical.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-slate-700"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={vertical.path}
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors group"
                  >
                    Explore This Domain
                    <svg
                      className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalsSection;
