const ProjectManagementBenefits = ({ onOpenModal }) => {
  const benefits = [
    "On-time project delivery with quality results",
    "Optimal resource allocation and cost management",
    "Enhanced team collaboration and communication",
    "Risk mitigation and proactive problem solving",
    "Scalable processes for projects of any size",
    "Continuous improvement and lessons learned",
  ];

  return (
    <section
      id="success"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Blurred Gradient Overlay */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-orange-200 via-pink-200 to-white opacity-60 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-100 via-orange-100 to-white opacity-50 rounded-full blur-2xl z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Project Success Guaranteed
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our proven project management approach ensures that every project
              is delivered successfully, meeting all requirements and exceeding
              expectations.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-md">
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
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-gradient-to-br from-orange-200 via-pink-200 to-white opacity-40 rounded-full blur-2xl z-0 pointer-events-none"></div>
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100 relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Let's discuss your project requirements and how our expert team
                can deliver exceptional results for your organization.
              </p>
              <div className="space-y-4">
                <button
                  onClick={onOpenModal}
                  className="block w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:from-orange-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagementBenefits;
