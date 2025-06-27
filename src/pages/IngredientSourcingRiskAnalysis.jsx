import { useState } from "react";
import ContactModal from "../components/ContactModal";

const IngredientSourcingRiskAnalysis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      title: "Risk Assessment",
      description:
        "Comprehensive identification and evaluation of potential risks across all business operations.",
      features: [
        "Risk Identification",
        "Impact Analysis",
        "Probability Assessment",
        "Risk Categorization",
      ],
    },
    {
      title: "Mitigation Strategies",
      description:
        "Development of customized strategies to minimize risk exposure and protect business operations.",
      features: [
        "Strategy Development",
        "Implementation Planning",
        "Contingency Planning",
        "Crisis Management",
      ],
    },
    {
      title: "Compliance Management",
      description:
        "Ensuring adherence to regulatory requirements and industry standards across all operations.",
      features: [
        "Regulatory Compliance",
        "Policy Development",
        "Audit Management",
        "Documentation Systems",
      ],
    },
    {
      title: "Financial Analysis",
      description:
        "In-depth financial risk analysis to protect and optimize your financial performance.",
      features: [
        "Financial Risk Assessment",
        "Market Analysis",
        "Investment Risk",
        "Cash Flow Management",
      ],
    },
  ];

  const combined_benefits = [
    "Reduced sourcing costs and improved margins",
    "Enhanced supplier relationships and reliability",
    "Improved product quality and consistency",
    "Sustainable and ethical sourcing practices",
    "Proactive risk identification and mitigation",
    "Enhanced regulatory compliance",
    "Improved business continuity planning",
    "Better financial risk management",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 via-slate-900 to-red-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="flex space-x-4">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌾</span>
                </div>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-yellow-200 to-red-200 bg-clip-text text-transparent">
                Ingredient Sourcing
              </span>
              <br />
              <span className="text-white">& Risk Management</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-4xl leading-relaxed">
              Comprehensive supply chain optimization combined with advanced
              risk management to ensure sustainable, reliable, and secure
              business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#services"
                className="group relative bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
              >
                <span className="relative z-10">Explore Our Services</span>
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Integrated Supply Chain & Risk Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our combined approach to ingredient sourcing and risk management
              provides a comprehensive framework for supply chain excellence,
              ensuring both operational efficiency and business security.
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Combined Benefits & Value
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the synergistic advantages of integrated sourcing and
              risk management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {combined_benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-gray-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-yellow-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Supply Chain & Manage Risk?
          </h2>
          <p className="text-xl text-yellow-100 mb-10 max-w-3xl mx-auto">
            Let our experts help you build a resilient, efficient, and
            sustainable supply chain with comprehensive risk management
            strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-yellow-600 to-red-600 hover:from-yellow-700 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center no-underline"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Optimize Your Supply Chain & Risk Management"
        subtitle="Let's discuss how we can strengthen your ingredient sourcing and build comprehensive risk management strategies"
        serviceType="Ingredient Sourcing & Risk Management Analysis"
        colorScheme="yellow-red"
      />
    </div>
  );
};

export default IngredientSourcingRiskAnalysis;
