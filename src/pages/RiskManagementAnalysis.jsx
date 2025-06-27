const RiskManagementAnalysis = () => {
  const services = [
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

  const riskTypes = [
    {
      icon: "💼",
      title: "Operational Risk",
      description:
        "Risks arising from internal processes, systems, and human factors that could impact operations.",
    },
    {
      icon: "💰",
      title: "Financial Risk",
      description:
        "Market volatility, credit risks, and liquidity challenges that could affect financial stability.",
    },
    {
      icon: "⚖️",
      title: "Compliance Risk",
      description:
        "Regulatory changes and compliance failures that could result in penalties or legal issues.",
    },
    {
      icon: "🌐",
      title: "Strategic Risk",
      description:
        "Market changes, competitive threats, and strategic decisions that could impact business goals.",
    },
    {
      icon: "🔒",
      title: "Cybersecurity Risk",
      description:
        "Data breaches, cyber attacks, and technology failures that could compromise business security.",
    },
    {
      icon: "🌍",
      title: "Environmental Risk",
      description:
        "Climate change, natural disasters, and environmental factors that could disrupt operations.",
    },
  ];

  const benefits = [
    "Proactive risk identification and prevention",
    "Reduced operational and financial losses",
    "Enhanced regulatory compliance",
    "Improved business continuity planning",
    "Better informed decision-making processes",
    "Increased stakeholder confidence",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-slate-900 to-purple-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-4xl">📊</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-red-200 to-purple-200 bg-clip-text text-transparent">
                Risk Management
              </span>
              <br />
              <span className="text-white">Analysis</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-4xl leading-relaxed">
              Advanced risk assessment and mitigation strategies to protect and
              grow your business through comprehensive analysis and strategic
              planning.
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
                Risk Assessment
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
            <div className="inline-block bg-red-100 text-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Risk Management Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive risk management solutions designed to protect your
              business and enable confident growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-red-200 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-700 transition-colors">
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
                          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mr-3"></div>
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

      {/* Risk Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-purple-100 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Risk Categories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We help you identify and manage all types of business risks that
              could impact your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskTypes.map((risk, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span>{risk.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-700 transition-colors">
                  {risk.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {risk.description}
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
              <div className="inline-block bg-red-100 text-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Risk Protection Excellence
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our comprehensive risk management approach provides you with the
                confidence to pursue growth opportunities while maintaining
                robust protection against potential threats.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                  Ready to Protect Your Business?
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Let's assess your current risk exposure and develop a
                  comprehensive strategy to protect and grow your business.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:resolutesolutions@hotmail.com"
                    className="block w-full bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-red-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Risk Assessment
                  </a>
                  <a
                    href="tel:+918073570073"
                    className="block w-full border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 text-center"
                  >
                    Schedule Consultation
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
            <div className="inline-block bg-purple-100 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Systematic Risk Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A structured approach to identifying, analyzing, and mitigating
              risks across your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Identification",
                description:
                  "Comprehensive assessment to identify all potential risks across your organization",
              },
              {
                step: "02",
                title: "Analysis",
                description:
                  "Detailed analysis of risk probability, impact, and potential consequences",
              },
              {
                step: "03",
                title: "Mitigation",
                description:
                  "Development and implementation of targeted risk mitigation strategies",
              },
              {
                step: "04",
                title: "Monitoring",
                description:
                  "Ongoing monitoring and adjustment of risk management strategies",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">{phase.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-700 transition-colors">
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

export default RiskManagementAnalysis;
