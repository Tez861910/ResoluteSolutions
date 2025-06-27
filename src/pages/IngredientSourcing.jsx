const IngredientSourcing = () => {
  const services = [
    {
      title: "Supply Chain Optimization",
      description:
        "Strategic optimization of your entire supply chain for efficiency, cost reduction, and reliability.",
      features: [
        "Network Design",
        "Logistics Optimization",
        "Vendor Consolidation",
        "Cost Analysis",
      ],
    },
    {
      title: "Vendor Management",
      description:
        "Comprehensive vendor relationship management to ensure quality, reliability, and competitive pricing.",
      features: [
        "Vendor Assessment",
        "Contract Negotiation",
        "Performance Monitoring",
        "Relationship Building",
      ],
    },
    {
      title: "Quality Control",
      description:
        "Rigorous quality control processes to ensure all sourced ingredients meet your specifications.",
      features: [
        "Quality Standards",
        "Testing Protocols",
        "Certification Management",
        "Compliance Tracking",
      ],
    },
    {
      title: "Sustainability Focus",
      description:
        "Sustainable sourcing practices that align with environmental and social responsibility goals.",
      features: [
        "Sustainable Sourcing",
        "Environmental Impact",
        "Ethical Practices",
        "Carbon Footprint Reduction",
      ],
    },
  ];

  const benefits = [
    "Reduced sourcing costs and improved margins",
    "Enhanced supply chain reliability and resilience",
    "Access to premium quality ingredients",
    "Sustainable and ethical sourcing practices",
    "Streamlined vendor management processes",
    "Improved product quality and consistency",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 via-slate-900 to-green-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-4xl">🌾</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-yellow-200 to-green-200 bg-clip-text text-transparent">
                Ingredient
              </span>
              <br />
              <span className="text-white">Sourcing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-4xl leading-relaxed">
              Strategic supply chain optimization and procurement solutions for
              sustainable ingredient sourcing that drives quality,
              cost-effectiveness, and ethical responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#services"
                className="group relative bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
              >
                <span className="relative z-10">Explore Our Services</span>
              </a>
              <a
                href="mailto:resolutesolutions.connect@gmail.com"
                className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sourcing Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive ingredient sourcing services that prioritize
              quality, sustainability, and cost-effectiveness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-yellow-200 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-green-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-yellow-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-slate-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full mr-3"></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Sustainability
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sustainable Sourcing Commitment
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to sourcing practices that protect our planet and
              support communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Environmental Impact",
                description:
                  "Minimizing environmental footprint through sustainable farming practices and eco-friendly transportation.",
              },
              {
                icon: "🤝",
                title: "Ethical Sourcing",
                description:
                  "Ensuring fair trade practices and supporting local communities in our sourcing networks.",
              },
              {
                icon: "♻️",
                title: "Circular Economy",
                description:
                  "Promoting waste reduction and resource efficiency throughout the supply chain.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-green-500 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span>{item.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-yellow-700 transition-colors">
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

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Sourcing Excellence
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our expertise in ingredient sourcing combines industry
                knowledge, sustainable practices, and cutting-edge technology to
                deliver superior results for your business.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Ready to Optimize Your Sourcing?
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Let's discuss how our sourcing solutions can enhance your
                  supply chain and drive sustainable growth.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:resolutesolutions.connect@gmail.com"
                    className="block w-full bg-gradient-to-r from-yellow-600 to-green-600 text-white px-8 py-4 rounded-full font-bold hover:from-yellow-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Request a Consultation
                  </a>
                  <a
                    href="tel:+918073570073"
                    className="block w-full border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 text-center"
                  >
                    Speak with an Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Systematic Sourcing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to ingredient sourcing that ensures quality,
              sustainability, and cost-effectiveness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analysis",
                description:
                  "Comprehensive assessment of your current sourcing needs and supply chain",
              },
              {
                step: "02",
                title: "Sourcing",
                description:
                  "Identification and evaluation of potential suppliers and ingredients",
              },
              {
                step: "03",
                title: "Negotiation",
                description:
                  "Contract negotiation and establishment of supplier relationships",
              },
              {
                step: "04",
                title: "Management",
                description:
                  "Ongoing monitoring and optimization of supplier performance",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-green-500 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">{phase.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-yellow-700 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IngredientSourcing;
