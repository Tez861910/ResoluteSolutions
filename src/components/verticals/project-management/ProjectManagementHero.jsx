const ProjectManagementHero = () => {
  return (
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
          <p className="text-xl md:text-2xl mb-6 text-slate-200 max-w-4xl leading-relaxed">
            Complete project management ensuring seamless execution from initial
            concept through successful completion with expert leadership and
            proven methodologies.
          </p>
          <p className="text-lg md:text-xl mb-12 text-orange-200 max-w-3xl leading-relaxed font-semibold">
            <span className="block">
              Specialized consulting for pharmaceutical, feed, and chemical
              facilities setup and operations management.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#services"
              className="group relative bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
            >
              <span className="relative z-10">Explore Our Services</span>
            </a>
            <a
              href="#success"
              className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default ProjectManagementHero;
