const HouseKeepingProcess = () => {
  const processes = [
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
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Systematic Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to product management that delivers measurable
            results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((phase, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white">{phase.step}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
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

export default HouseKeepingProcess;
