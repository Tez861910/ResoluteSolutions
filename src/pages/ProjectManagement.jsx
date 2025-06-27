const ProjectManagement = () => {
  const services = [
    {
      title: "Project Planning",
      description:
        "Comprehensive project planning and strategy development to ensure successful project delivery.",
      features: [
        "Project Scope Definition",
        "Timeline Development",
        "Resource Planning",
        "Budget Management",
      ],
    },
    {
      title: "Resource Management",
      description:
        "Optimal allocation and management of resources to maximize efficiency and project success.",
      features: [
        "Team Assembly",
        "Skill Assessment",
        "Capacity Planning",
        "Performance Optimization",
      ],
    },
    {
      title: "Timeline Optimization",
      description:
        "Advanced scheduling and timeline management to deliver projects on time and within budget.",
      features: [
        "Critical Path Analysis",
        "Schedule Optimization",
        "Milestone Management",
        "Deadline Adherence",
      ],
    },
    {
      title: "Quality Delivery",
      description:
        "Rigorous quality assurance processes to ensure project deliverables meet all requirements.",
      features: [
        "Quality Standards",
        "Testing Protocols",
        "Deliverable Review",
        "Continuous Improvement",
      ],
    },
  ];

  const methodologies = [
    {
      icon: "⚡",
      title: "Agile",
      description:
        "Flexible, iterative approach perfect for projects requiring adaptability and frequent feedback.",
    },
    {
      icon: "📋",
      title: "Waterfall",
      description:
        "Sequential, structured approach ideal for projects with well-defined requirements and timelines.",
    },
    {
      icon: "🔄",
      title: "Hybrid",
      description:
        "Combined approach leveraging the best of both agile and traditional methodologies.",
    },
    {
      icon: "📊",
      title: "Lean",
      description:
        "Value-focused approach that minimizes waste and maximizes efficiency in project delivery.",
    },
  ];

  const benefits = [
    "On-time project delivery with quality results",
    "Optimal resource allocation and cost management",
    "Enhanced team collaboration and communication",
    "Risk mitigation and proactive problem solving",
    "Scalable processes for projects of any size",
    "Continuous improvement and lessons learned",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-800 via-slate-900 to-pink-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-4xl">🎯</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-orange-200 to-pink-200 bg-clip-text text-transparent">
                Project
              </span>
              <br />
              <span className="text-white">Management</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-4xl leading-relaxed">
              Complete project orchestration ensuring seamless execution from
              initial concept through successful completion with expert
              leadership and proven methodologies.
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
                Start Your Project
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
            <div className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Project Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive project management services that deliver results on
              time, within budget, and exceeding expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-orange-200 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
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
                          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-700 transition-colors">
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
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mr-3"></div>
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

      {/* Methodologies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Methodologies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Proven Approaches
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We adapt our methodology to match your project needs and
              organizational culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span>{methodology.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-700 transition-colors">
                  {methodology.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {methodology.description}
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
              <div className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Project Success Guaranteed
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our proven project management approach ensures that every
                project is delivered successfully, meeting all requirements and
                exceeding expectations.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                  Ready to Start Your Project?
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Let's discuss your project requirements and how our expert
                  team can deliver exceptional results for your organization.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:resolutesolutions@hotmail.com"
                    className="block w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:from-orange-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="tel:+918073570073"
                    className="block w-full border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 text-center"
                  >
                    Schedule a Call
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
            <div className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Structured Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to project management that ensures
              consistent delivery of exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your needs, goals, and constraints to define project scope",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed planning of resources, timelines, and deliverables",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Coordinated implementation with regular monitoring and communication",
              },
              {
                step: "04",
                title: "Monitoring",
                description:
                  "Continuous tracking of progress, quality, and performance metrics",
              },
              {
                step: "05",
                title: "Delivery",
                description:
                  "Final delivery with quality assurance and knowledge transfer",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">{phase.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-700 transition-colors">
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

export default ProjectManagement;
