const ProjectManagementServices = () => {
  const services = [
    {
      title: "Factory Setup Consulting",
      description:
        "Comprehensive consulting for pharmaceutical, feed, and chemical facility setup and optimization.",
      features: [
        "Facility Design & Layout",
        "Equipment Selection",
        "Process Optimization",
        "Capacity Planning",
      ],
    },
    {
      title: "Regulatory & Compliance Guidance",
      description:
        "Expert guidance on regulatory requirements and compliance standards for your industry.",
      features: [
        "Regulatory Assessment",
        "Compliance Planning",
        "Documentation Support",
        "Audit Preparation",
      ],
    },
    {
      title: "Vendor & Operations Setup",
      description:
        "Strategic vendor selection and operational framework establishment for smooth operations.",
      features: [
        "Vendor Evaluation",
        "Supply Chain Setup",
        "Operations Framework",
        "Quality Systems",
      ],
    },
    {
      title: "Business Setup Services",
      description:
        "Complete business establishment services from initial setup to operational readiness.",
      features: [
        "Business Planning",
        "Legal Framework",
        "Operational Procedures",
        "Team Development",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 relative bg-gradient-to-b from-white via-orange-50/60 to-slate-50 overflow-hidden"
    >
      {/* Blurred Gradient Overlay */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/40 via-pink-200/30 to-white rounded-full blur-3xl opacity-70 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-200/40 via-orange-100/30 to-white rounded-full blur-2xl opacity-60 pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Our Consulting & Setup Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Consulting & Setup Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            We specialize in consulting for pharmaceutical, feed, and chemical
            facilities. Our setup services are tailored for highly regulated,
            quality-driven industries.
          </p>
          <p className="text-base text-orange-700 max-w-2xl mx-auto leading-relaxed">
            From initial planning to operational readiness, we ensure
            compliance, efficiency, and excellence at every stage of your
            business setup.
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
  );
};

export default ProjectManagementServices;
