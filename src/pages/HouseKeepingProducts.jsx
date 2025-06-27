const HouseKeepingProducts = () => {
  const services = [
    {
      title: "Product Lifecycle Management",
      description:
        "Comprehensive management from product conception to end-of-life, ensuring maximum value extraction.",
      features: [
        "Product Development Planning",
        "Launch Strategy",
        "Performance Monitoring",
        "End-of-Life Planning",
      ],
    },
    {
      title: "Retention Strategies",
      description:
        "Data-driven strategies to maintain product relevance and extend market presence.",
      features: [
        "Market Analysis",
        "Customer Feedback Integration",
        "Competitive Positioning",
        "Value Proposition Enhancement",
      ],
    },
    {
      title: "Portfolio Optimization",
      description:
        "Strategic analysis and optimization of your entire product portfolio for maximum ROI.",
      features: [
        "Portfolio Analysis",
        "Resource Allocation",
        "Performance Metrics",
        "Strategic Recommendations",
      ],
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes to ensure product excellence and customer satisfaction.",
      features: [
        "Quality Standards Development",
        "Testing Protocols",
        "Compliance Monitoring",
        "Continuous Improvement",
      ],
    },
  ];

  const benefits = [
    "Increased product longevity and market presence",
    "Improved ROI across your product portfolio",
    "Enhanced customer satisfaction and loyalty",
    "Streamlined product management processes",
    "Data-driven decision making capabilities",
    "Reduced operational costs and waste",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-slate-900 to-blue-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-4xl">🏠</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent">
                House Keeping
              </span>
              <br />
              <span className="text-white">Products</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-4xl leading-relaxed">
              Comprehensive product lifecycle management and retention solutions
              to maximize your product portfolio value and ensure long-term
              market success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#services"
                className="group relative bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
              >
                <span className="relative z-10">Explore Our Services</span>
              </a>
              <a
                href="mailto:resolutesolutions@hotmail.com"
                className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
              >
                Get a Consultation
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
            <div className="inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              House Keeping Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Specialized solutions designed to optimize your product portfolio
              and ensure sustained market success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-green-200 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
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
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></div>
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

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                House Keeping Excellence
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our comprehensive approach to product management ensures that
                your products not only survive but thrive in competitive
                markets. We focus on creating sustainable value that benefits
                both your business and your customers.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                  Ready to Optimize Your Products?
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Let's discuss how our house keeping solutions can transform
                  your product portfolio and drive sustainable growth.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:resolutesolutions@hotmail.com"
                    className="block w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Schedule a Consultation
                  </a>
                  <a
                    href="tel:+918073570073"
                    className="block w-full border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 text-center"
                  >
                    Call Us Today{" "}
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
            <div className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Systematic Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to product management that delivers
              measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "Comprehensive analysis of your current product portfolio and market position",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Development of customized strategies for each product lifecycle stage",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Execution of optimized processes and quality assurance protocols",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Continuous monitoring and refinement for sustained performance",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">{phase.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
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

export default HouseKeepingProducts;
