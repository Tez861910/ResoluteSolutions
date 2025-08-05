import logoImage from "../../assets/resolute-solutions-high-resolution-logo-transparent-2.png";

const HeroSection = () => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-slate-900 to-cyan-800 opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-8 lg:hidden">
              <img
                src={logoImage}
                alt="Resolute Solutions Logo"
                className="h-10 w-10 object-cover rounded-full"
                onError={(e) => {
                  // Fallback to text logo if image fails
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback RS logo if image fails to load */}
              <span
                className="text-white font-bold tracking-tight text-lg"
                style={{ display: "none" }}
              >
                RS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                Resolute
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-red-400 font-bold italic">
              The Right Choice
            </p>
            <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-4xl leading-relaxed">
              Transforming businesses through strategic innovation across three
              specialized domains - making us the right choice for your success
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#verticals"
                className="group relative bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
              >
                <span className="relative z-10">Discover Our Expertise</span>
              </a>
              <a
                href="#cta"
                className="group bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
              >
                <span className="relative z-10">Start Your Journey</span>
              </a>
            </div>
          </div>

          {/* Right Side - Large Logo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-2xl transform scale-125"></div>
              <div className="relative flex items-center justify-center">
                <img
                  src={logoImage}
                  alt="Resolute Solutions Logo"
                  className="h-96 w-96 object-contain drop-shadow-2xl"
                  onError={(e) => {
                    // Fallback to text logo if image fails
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback RS logo if image fails to load */}
                <div
                  className="w-96 h-96 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold tracking-tight text-9xl shadow-2xl"
                  style={{ display: "none" }}
                >
                  RS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
