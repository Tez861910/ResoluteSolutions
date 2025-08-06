const ProjectManagementMethodologies = () => {
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

  return (
    <section className="py-24 relative bg-white overflow-hidden">
      {/* Blurred Gradient Overlay */}
      <div className="absolute -top-24 right-0 w-[350px] h-[350px] bg-gradient-to-br from-pink-200/40 via-orange-100/30 to-white rounded-full blur-2xl opacity-60 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-orange-200/40 via-pink-100/30 to-white rounded-full blur-2xl opacity-50 pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
  );
};

export default ProjectManagementMethodologies;
