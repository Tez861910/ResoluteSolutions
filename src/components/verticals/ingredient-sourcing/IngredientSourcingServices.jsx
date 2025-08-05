const IngredientSourcingServices = () => {
  const sourcing_services = [
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

  const risk_services = [
    {
      title: "Purchase Risk Assessment",
      description:
        "Comprehensive identification and evaluation of potential risks in ingredient purchase management.",
      features: [
        "Supplier Risk Identification",
        "Price Volatility Analysis",
        "Quality Risk Assessment",
        "Supply Chain Vulnerability",
      ],
    },
    {
      title: "Mitigation Strategies",
      description:
        "Development of customized strategies to minimize risk exposure in ingredient procurement operations.",
      features: [
        "Procurement Strategy Development",
        "Supplier Diversification",
        "Contract Risk Management",
        "Crisis Response Planning",
      ],
    },
    {
      title: "Supply Chain Risk Management",
      description:
        "Ensuring stable and reliable ingredient supply chains with minimal disruption risks.",
      features: [
        "Supply Chain Monitoring",
        "Vendor Risk Evaluation",
        "Inventory Risk Management",
        "Logistics Risk Assessment",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/40 via-white/0 to-red-100/40 pointer-events-none"></div>
      {/* Blurred shapes for depth */}
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-yellow-200/30 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Specialized Ingredient Sourcing for Regulated Industries
          </h2>
          <p className="text-xl text-yellow-800 max-w-4xl mx-auto leading-relaxed mb-4">
            We specialize in sourcing ingredients for Pharmaceutical, Feed, and
            Chemicals manufacturing, including APIs, vitamins, amino acids,
            minerals, chelates, toxin binders, halquinol, specialty chemicals,
            additives, and packaging materials.
          </p>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Our integrated approach combines supply chain optimization and risk
            management to ensure quality, compliance, and reliability for your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ingredient Sourcing Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌾</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategic Ingredient Sourcing
              </h3>
              <p className="text-gray-600">
                Optimize your supply chain with sustainable, cost-effective
                ingredient sourcing solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sourcing_services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Management Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Risk Management
              </h3>
              <p className="text-gray-600">
                Comprehensive risk assessment and mitigation strategies to
                protect your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {risk_services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientSourcingServices;
