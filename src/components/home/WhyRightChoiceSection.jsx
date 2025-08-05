const WhyRightChoiceSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Precision Focus",
      description:
        "Laser-focused expertise in each vertical ensures exceptional results",
    },
    {
      icon: "🌟",
      title: "Proven Excellence",
      description:
        "Track record of delivering transformational outcomes for our clients",
    },
    {
      icon: "🤝",
      title: "Trusted Partnership",
      description:
        "Building long-term relationships based on trust and mutual success",
    },
    {
      icon: "🚀",
      title: "Innovation Drive",
      description:
        "Cutting-edge approaches that keep you ahead of the competition",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/40 via-white/0 to-cyan-100/40 pointer-events-none"></div>
      {/* Blurred shape for depth */}
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Why Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Making Us{" "}
            <span className="text-red-600 italic">The Right Choice</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence across three specialized domains sets
            us apart in delivering transformational results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span>{item.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRightChoiceSection;
