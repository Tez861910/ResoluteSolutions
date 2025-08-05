const IngredientSourcingHero = () => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 via-slate-900 to-red-800 opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-3xl">🌾</span>
              </div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-yellow-200 to-red-200 bg-clip-text text-transparent">
              Ingredient Sourcing
            </span>
            <br />
            <span className="text-white">& Risk Management</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-slate-200 max-w-4xl leading-relaxed">
            Comprehensive supply chain optimization combined with advanced risk
            management to ensure sustainable, reliable, and secure business
            operations.
          </p>
          <p className="text-lg md:text-xl mb-12 text-yellow-200 max-w-3xl leading-relaxed font-semibold">
            <span className="block">
              Specialised in sourcing ingredients required for Pharmaceutical,
              Feed, Chemicals manufacturing processes such as:
            </span>
            <ul className="list-decimal list-inside mt-2 text-yellow-100 text-base font-normal">
              <li>Active Pharma Ingredients (APIs)</li>
              <li>Vitamins</li>
              <li>Amino Acids</li>
              <li>Minerals</li>
              <li>Chelates</li>
              <li>Toxin Binders</li>
              <li>Halquinol</li>
              <li>Speciality Chemicals</li>
              <li>Medicated and Non Medicated Additives</li>
              <li>Packaging Materials</li>
            </ul>
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#services"
              className="group relative bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
            >
              <span className="relative z-10">Explore Our Services</span>
            </a>
            <a
              href="#cta"
              className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default IngredientSourcingHero;
