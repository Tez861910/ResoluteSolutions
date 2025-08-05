const IngredientSourcingCTA = ({ onOpenModal }) => {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-gray-900 via-yellow-900 to-red-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Optimize Your Supply Chain & Manage Risk?
        </h2>
        <p className="text-xl text-yellow-100 mb-10 max-w-3xl mx-auto">
          Let our experts help you build a resilient, efficient, and sustainable
          supply chain with comprehensive risk management strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenModal}
            className="bg-gradient-to-r from-yellow-600 to-red-600 hover:from-yellow-700 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center no-underline"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default IngredientSourcingCTA;
