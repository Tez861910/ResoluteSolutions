const HouseKeepingServices = () => {
  const services = [
    {
      title: "Bulk Product Sourcing",
      description:
        "Reliable sourcing of high-quality housekeeping products through our extensive vendor network for institutions and industries.",
      features: [
        "Vendor Network Access",
        "Bulk Procurement",
        "Quality Verification",
        "Competitive Pricing",
      ],
    },
    {
      title: "Institutional Supply Solutions",
      description:
        "Comprehensive supply solutions tailored for educational institutions, medical facilities, and industrial operations.",
      features: [
        "Educational Institution Supply",
        "Medical Facility Products",
        "Industrial Cleaning Solutions",
        "Custom Package Solutions",
      ],
    },
    {
      title: "Trading & Distribution",
      description:
        "Strategic trading and distribution services ensuring timely delivery of products to your facilities.",
      features: [
        "Trading Operations",
        "Distribution Management",
        "Logistics Coordination",
        "Supply Chain Efficiency",
      ],
    },
    {
      title: "Vendor Partnership",
      description:
        "Strong vendor partnerships enabling access to premium products at competitive wholesale rates.",
      features: [
        "Vendor Network Management",
        "Partnership Development",
        "Quality Assurance",
        "Price Optimization",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Bulk Procurement Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive sourcing and trading services for housekeeping
            products serving institutions and industries with reliable bulk
            procurement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-purple-200 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-slate-700"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
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
  );
};

export default HouseKeepingServices;
