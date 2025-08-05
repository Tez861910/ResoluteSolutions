const HouseKeepingBenefits = ({ onOpenModal }) => {
  const benefits = [
    "Cost-effective bulk procurement solutions",
    "Reliable supply chain and vendor network access",
    "Quality assured products for institutional use",
    "Streamlined procurement and delivery processes",
    "Competitive wholesale pricing advantages",
    "Dedicated support for institutional requirements",
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Blurred Gradient Overlay */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200 via-purple-200 to-white opacity-60 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100 via-blue-100 to-white opacity-50 rounded-full blur-2xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              House Keeping Excellence
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our comprehensive approach to product management ensures that your
              products not only survive but thrive in competitive markets. We
              focus on creating sustainable value that benefits both your
              business and your customers.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-md">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Card Gradient Overlay */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-gradient-to-br from-blue-200 via-purple-200 to-white opacity-40 rounded-full blur-2xl z-0 pointer-events-none"></div>
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100 relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Ready to Optimize Your Products?
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Let's discuss how our house keeping solutions can transform your
                product portfolio and drive sustainable growth.
              </p>
              <div className="space-y-4">
                <button
                  onClick={onOpenModal}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseKeepingBenefits;
