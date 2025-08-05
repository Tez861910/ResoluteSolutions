const CTASection = ({ onOpenModal }) => {
  return (
    <section
      id="cta"
      className="relative bg-slate-900 text-white py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 to-cyan-900/50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Ready to Make the Right Choice?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join forward-thinking leaders who trust Resolute Solutions to
            drive meaningful transformation across their organizations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={onOpenModal}
              className="group bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
