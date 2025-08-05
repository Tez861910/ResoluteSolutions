const IngredientSourcingBenefits = () => {
  const combined_benefits = [
    "Reduced sourcing costs and improved margins",
    "Enhanced supplier relationships and reliability",
    "Improved product quality and consistency",
    "Sustainable and ethical sourcing practices",
    "Proactive risk identification and mitigation",
    "Enhanced supply chain risk management",
    "Improved business continuity planning",
    "Better purchase risk management",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-yellow-50 to-red-50 overflow-hidden">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-red-100/40 via-white/0 to-yellow-100/40 pointer-events-none"></div>
      {/* Blurred shapes for depth */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-red-200/30 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-200/30 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Combined Benefits & Value
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the synergistic advantages of integrated sourcing and
            risk management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {combined_benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <p className="text-gray-800 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientSourcingBenefits;
