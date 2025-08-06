const ProjectManagementProcess = () => {
  return (
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
            A systematic approach to project management that ensures consistent
            delivery of exceptional results
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
  );
};

export default ProjectManagementProcess;
