import { useState } from "react";
import ContactModal from "../components/ContactModal";

const HouseKeepingProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      title: "Product Lifecycle Management",
      description:
        "Comprehensive management from product conception to end-of-life, ensuring maximum value extraction.",
      features: [
        "Product Development Planning",
        "Launch Strategy",
        "Performance Monitoring",
        "End-of-Life Planning",
      ],
    },
    {
      title: "Retention Strategies",
      description:
        "Data-driven strategies to maintain product relevance and extend market presence.",
      features: [
        "Market Analysis",
        "Customer Feedback Integration",
        "Competitive Positioning",
        "Value Proposition Enhancement",
      ],
    },
    {
      title: "Portfolio Optimization",
      description:
        "Strategic analysis and optimization of your entire product portfolio for maximum ROI.",
      features: [
        "Portfolio Analysis",
        "Resource Allocation",
        "Performance Metrics",
        "Strategic Recommendations",
      ],
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes to ensure product excellence and customer satisfaction.",
      features: [
        "Quality Standards Development",
        "Testing Protocols",
        "Compliance Monitoring",
        "Continuous Improvement",
      ],
    },
  ];

  const benefits = [
    "Increased product longevity and market presence",
    "Improved ROI across your product portfolio",
    "Enhanced customer satisfaction and loyalty",
    "Streamlined product management processes",
    "Data-driven decision making capabilities",
    "Reduced operational costs and waste",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-slate-900 to-purple-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="text-4xl">🏠</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                House Keeping
              </span>
              <br />
              <span className="text-white">Products</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-4xl leading-relaxed">
              Comprehensive product lifecycle management and retention solutions
              to maximize your product portfolio value and ensure long-term
              market success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#products"
                className="group relative bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
              >
                <span className="relative z-10">Explore Our Products</span>
              </a>
              <a
                href="#services"
                className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
              >
                Exposure Our Services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              House Keeping Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Specialized solutions designed to optimize your product portfolio
              and ensure sustained market success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-purple-200 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-slate-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Our comprehensive approach to product management ensures that
                your products not only survive but thrive in competitive
                markets. We focus on creating sustainable value that benefits
                both your business and your customers.
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
                    <span className="text-slate-700 font-medium">
                      {benefit}
                    </span>
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
                  Let's discuss how our house keeping solutions can transform
                  your product portfolio and drive sustainable growth.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
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

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Systematic Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to product management that delivers
              measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "Comprehensive analysis of your current product portfolio and market position",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Development of customized strategies for each product lifecycle stage",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Execution of optimized processes and quality assurance protocols",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Continuous monitoring and refinement for sustained performance",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">{phase.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House Keeping Products Catalogue Section */}
      <section
        id="products"
        className="py-24 bg-slate-50 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
      >
        {/* Blurred Gradient Overlay */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200 via-purple-200 to-white opacity-60 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100 via-blue-100 to-white opacity-50 rounded-full blur-2xl z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our House Keeping Products
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Product Catalogue
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our range of professional cleaning and hygiene solutions
              designed for diverse environments.
            </p>
            {/* Highlighted Intro Block */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-xl shadow-md px-8 py-6 max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight uppercase">
                The Right Destination for All House Keeping Products
              </h3>
              <p className="text-slate-900 text-lg mb-2">
                We supply world class products of special cleansing chemicals
                relevant in all sectors of housekeeping.
              </p>
              <ul className="list-disc list-inside text-slate-900 text-base mb-2">
                <li>
                  The products are eco-friendly, user friendly and made with
                  superior grades of ingredients.
                </li>
                <li>Supplied to consumers after intense quality checking.</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Product Cards */}
            {[
              {
                name: "GERMI CHECK – Disinfectant Cum Cleaner",
                description:
                  "Perfect for keeping unwanted germs away. Cleans, disinfects, and deodorizes in one step. Eco-friendly, safe for hospitals and facilities where cross contamination is a concern. Tackles bacteria, fungi, and viruses. Neutral reaction, leaves area germ-free and safe.",
                benefits: [
                  "Cleans the area",
                  "Kills Bacteria and Germs",
                  "Avoids bad odor",
                  "Leaves pleasant fragrance",
                ],
                application:
                  "All types of Floors, Toilets. Recommended for regular use.",
                usage: "10–20 ml in 1 liter of Water.",
              },
              {
                name: "Multi Clean – Multi Purpose Cleaner",
                description:
                  "General purpose cleaner concentrate. Removes rigid stains from any floor or material without damage. Suitable for manual and auto cleaning. No rinsing required. Neutral reaction.",
                benefits: ["Cleans all types of surfaces and floors"],
                application:
                  "Ideal for all types of walls, Floors & Furniture etc. Recommended for regular use.",
                usage: "10–20 ml in 1 liter of water.",
              },
              {
                name: "Deep Clean – Heavy Duty Surface Cleaner",
                description:
                  "Deep acting remedy for hardcore stains. Removes organic and hydrocarbon stains. Cleans walls, floors, ceilings, doors, cabinets, toys, sports equipment, and more. Removes mold and mildew stains.",
                benefits: [
                  "Cleans all types of surfaces, furniture",
                  "Heavy duty application",
                ],
                application:
                  "Ideal for all types of walls, Floors, Furniture etc. Recommended for regular use.",
                usage: "10–20 ml in 1 liter of water.",
              },
              {
                name: "Degreaser - Oil & Grease Remover",
                description:
                  "Alkaline-based, non-foaming degreaser. Removes tough grease and grime from non-porous surfaces. Removes oils, soot, ash, pollen, tar, and more. For manual and machine use.",
                benefits: [
                  "Heavy Duty Floor cleaner removing stains, oil and grease",
                  "Non Foaming, ideal for manual & machine use",
                ],
                application:
                  "Industrial Floor, Machines, Chimneys to remove oil & grease.",
                usage: "20–80 ml in 1 liter of water.",
              },
              {
                name: "Scale Buster Plus (De-Scaler and Toilet Bowl Cleaner)",
                description:
                  "High viscosity, potent scale remover and toilet bowl cleaner. Removes hard water mineral deposits, stains, and soap scum. Acid-based, non-foaming.",
                benefits: ["Removes Scale, stubborn dirt"],
                application: "Ceramic Tiles, Wash basins and Toilets",
                usage:
                  "Ready to use. Apply with gloves, leave for a few minutes, scrub, rinse.",
              },
              {
                name: "Scale Buster (De-Scaler)",
                description:
                  "Low viscosity liquid scale remover. Reaches all corners to remove hard water deposits and stains. Acid-based, non-foaming.",
                benefits: [
                  "Removes Scale formation",
                  "Removes stubborn dirt",
                  "Cleans the surface",
                ],
                application:
                  "Ceramic Tiles, Wash Basins & Toilets, Acidic Product.",
                usage: "Ready to use. Use gloves. Apply, leave, scrub, rinse.",
              },
              {
                name: "Crystal Dew – Glass Cleaner",
                description:
                  "Water-based glass cleaner with special detergents for clarity. No streaks, removes stains, smudges, and insect splatter. Pleasantly perfumed.",
                benefits: [
                  "Cleans Glasses, Mirrors, etc.",
                  "Removes Oil and Grease",
                  "Pleasantly Perfumed",
                  "No rinsing required",
                ],
                application:
                  "Glass, Mirror, Television, Computer Monitor, Keyboard, etc.",
                usage: "Ready to use. Spray and wipe with a clean dry cloth.",
              },
              {
                name: "Genteel – Hand Wash",
                description:
                  "Low foam hand wash to minimize water use. Cleans hands, neutral pH, leaves skin soft and supple. Pleasant fragrance.",
                benefits: [
                  "Cleans the hands",
                  "Leaves pleasant fragrance",
                  "Soft on hands",
                ],
                application:
                  "All sorts of Industries, Hospitals, Hotels & Restaurants.",
                usage:
                  "Ready to use. Apply, rub, rinse. Recommended for regular use.",
              },
              {
                name: "Genteel Soft – Hand Wash",
                description:
                  "High foaming hand wash for smooth lather, soft on hands. Leaves skin soft and supple. Pleasant fragrance.",
                benefits: [
                  "Cleans the hands",
                  "Leaves pleasant fragrance",
                  "Soft on hands",
                ],
                application:
                  "All sorts of Industries, Hospitals, Hotels, Restaurants.",
                usage: "Ready to use. Apply, lather, rinse.",
              },
              {
                name: "Genteel Gel – Hand Wash",
                description:
                  "Premium high foaming hand wash for smooth lather, soft on hands. Leaves skin soft and supple. Pleasant fragrance.",
                benefits: [
                  "Cleans the hands",
                  "Leaves pleasant fragrance",
                  "Soft on hands",
                ],
                application:
                  "Offices, Industries, Hospitals, Hotels and Restaurants.",
                usage: "Ready to use. Apply, lather, rinse.",
              },
              {
                name: "Bactiwash – Anti-Bacterial Hand Wash",
                description:
                  "High foaming, anti-bacterial hand wash. Keeps hands clean from dirt and bacteria. Soft on hands, leaves skin supple.",
                benefits: [
                  "Cleans the hands",
                  "Leaves pleasant fragrance",
                  "Soft on hands",
                ],
                application: "Industries, Hospitals, Hotels and Restaurants.",
                usage: "Ready to use. Apply, lather, rinse.",
              },
              {
                name: "Hand Cleanzor – Sanitizer",
                description:
                  "Effective hand sanitizer for bacteria and viruses. Fast evaporating, non-sticky, pleasant fragrance.",
                benefits: [
                  "Hand Sanitizer",
                  "Disinfects and Sanitizes",
                  "Leaves pleasant fragrance",
                  "Fast evaporating",
                ],
                application: "Industries, Hospitals, Hotels and Restaurants.",
                usage: "Ready to use. Apply, rub. Recommended for regular use.",
              },
              {
                name: "Dish Dew – Vessel Cleaner",
                description:
                  "Dishwashing liquid with neutral effect. Removes tough stains, gentle on hands, total grease remover, abundant foam. Ideal for restaurants, canteens, hotels.",
                benefits: [
                  "Cleans all types of vessels",
                  "Eliminates bad smell",
                  "Easy rinsing",
                  "Soft on hands",
                  "Pleasantly perfumed",
                ],
                application: "All types of vessels.",
                usage: "20–60 ml in 1 liter of water. Apply, scrub, rinse.",
              },
              {
                name: "Dish Wash - Heavy Duty Vessel Cleaner for Tough Stains",
                description:
                  "Heavy duty dishwashing liquid for tough oil stains. Highly active, gentle on hands. Ideal for restaurants, canteens, hotels.",
                benefits: [
                  "Cleans all types of vessels",
                  "Eliminates bad smell",
                  "Easy rinsing",
                  "Soft on hands",
                ],
                application: "All types of vessels.",
                usage: "20–60 ml in 1 liter of water. Apply, scrub, rinse.",
              },
            ].map((product, idx) => {
              // Skip the first 4 images, use the rest for products
              const imageList = [
                "GermiCheck.jpg",
                "MultiClean.jpg",
                "DeepClean.jpg",
                "Degreaser.jpg",
                "ScaleBusterPlus.jpg",
                "ScaleBuster.jpg",
                "CrystalDew.jpg",
                "Genteel.jpg",
                "GenteelSoft.jpg",
                "GenteelGel.jpg",
                "Bactiwash.jpg",
                "HandCleanzor.jpg",
                "DishDew.jpg",
                "DishWash.jpg",
              ];
              const imageUrl = `${import.meta.env.BASE_URL}${
                imageList[idx] || "logo.png"
              }`;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-slate-100 hover:border-purple-200 transform hover:-translate-y-2 flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-200 via-purple-200 to-white opacity-30 rounded-full blur-2xl z-0 pointer-events-none"></div>
                  <img
                    src={imageUrl}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-xl mx-auto mb-4 shadow-md border border-slate-100 bg-slate-50 z-10 relative"
                  />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors z-10 relative">
                    {product.name}
                  </h3>
                  <p className="text-slate-900 mb-4 z-10 relative">
                    {product.description}
                  </p>
                  <ul className="mb-2 text-sm text-slate-900 list-disc list-inside z-10 relative">
                    {product.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 z-10 relative">
                    <div className="text-xs text-slate-700 mb-1">
                      <span className="font-semibold text-slate-900">
                        Application:
                      </span>{" "}
                      {product.application}
                    </div>
                    <div className="text-xs text-slate-700">
                      <span className="font-semibold text-slate-900">
                        Usage:
                      </span>{" "}
                      {product.usage}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Optimize Your Product Portfolio"
        subtitle="Let's discuss how our house keeping products expertise can maximize your product lifecycle value"
        serviceType="House Keeping Products"
        colorScheme="blue-purple"
      />
    </div>
  );
};

export default HouseKeepingProducts;
