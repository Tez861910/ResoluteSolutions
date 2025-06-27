import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import logoImage from "/resolute-solutions-high-resolution-logo-transparent-2.png";

const Home = () => {
  const verticals = [
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
    {
      name: "Ingredient Sourcing",
      path: "/sourcing",
      icon: "🌾",
      description:
        "Strategic supply chain optimization and procurement solutions for sustainable ingredient sourcing.",
      features: [
        "Supply Chain Optimization",
        "Vendor Management",
        "Quality Control",
        "Sustainability Focus",
      ],
    },
    {
      name: "Risk Management Analysis",
      path: "/risk",
      icon: "📊",
      description:
        "Advanced risk assessment and mitigation strategies to protect and grow your business.",
      features: [
        "Risk Assessment",
        "Mitigation Strategies",
        "Compliance Management",
        "Financial Analysis",
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
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-slate-900 to-indigo-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <img
                  src={logoImage}
                  alt="Resolute Solutions Logo"
                  className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 object-cover rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-3xl hover:border-white/50"
                  onError={(e) => {
                    // Fallback to text logo if image fails
                    e.target.style.display = "none";
                    e.target.nextSibling.nextSibling.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-sm"></div>
                {/* Fallback RS logo if image fails to load */}
                <div
                  className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-3xl border-4 border-white/30"
                  style={{ display: "none" }}
                >
                  <span className="text-white font-bold tracking-tight text-2xl sm:text-4xl lg:text-5xl">
                    RS
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-200 to-white bg-clip-text text-transparent">
                Resolute
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-red-400 font-bold italic">
              The Right Choice
            </p>
            <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Transforming businesses through strategic innovation across four
              specialized domains - making us the right choice for your success
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/housekeeping"
                className="group relative bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="relative z-10">Discover Our Expertise</span>
              </Link>
              <a
                href="#verticals"
                className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why Right Choice Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-red-100 text-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Why Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Making Us{" "}
              <span className="text-red-600 italic">The Right Choice</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence across four specialized domains sets
              us apart in delivering transformational results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Precision Focus",
                description:
                  "Laser-focused expertise in each vertical ensures exceptional results",
              },
              {
                icon: "🌟",
                title: "Proven Excellence",
                description:
                  "Track record of delivering transformational outcomes for our clients",
              },
              {
                icon: "🤝",
                title: "Trusted Partnership",
                description:
                  "Building long-term relationships based on trust and mutual success",
              },
              {
                icon: "🚀",
                title: "Innovation Drive",
                description:
                  "Cutting-edge approaches that keep you ahead of the competition",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span>{item.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section
        id="verticals"
        className="py-24 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Four Pillars of Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Specialized domains where we drive transformation and deliver
              exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.map((vertical) => (
              <div
                key={vertical.path}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-indigo-200 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {vertical.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">
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
                          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mr-3"></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={vertical.path}
                      className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group"
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

      {/* CTA Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-slate-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-red-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Ready to Make the Right Choice?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join forward-thinking leaders who trust Resolute Solutions to
              drive meaningful transformation across their organizations
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:resolutesolutions@hotmail.com"
                className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-10 py-4 rounded-full font-bold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="relative z-10">Start Your Journey</span>
              </a>
              <a
                href="tel:+918073570073"
                className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Schedule Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
