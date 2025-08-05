const HouseKeepingProductCatalogue = () => {
  const products = [
    {
      name: "Deep Clean",
      image: "/DeepClean.jpg",
      category: "Heavy Duty Cleaner",
      description:
        "Industrial strength cleaner for tough stains and deep cleaning applications.",
    },
    {
      name: "Dish Dew",
      image: "/DishDew.jpg",
      category: "Dishwashing Liquid",
      description:
        "Gentle yet effective dishwashing liquid with superior grease-cutting power.",
    },
    {
      name: "Dish Wash",
      image: "/DishWash.jpg",
      category: "Dishwashing Powder",
      description:
        "Concentrated dishwashing powder for commercial kitchen applications.",
    },
    {
      name: "Degreaser",
      image: "/Degreaser.jpg",
      category: "Degreasing Agent",
      description:
        "Powerful degreaser for removing oil and grease from various surfaces.",
    },
    {
      name: "Genteel",
      image: "/Genteel.jpg",
      category: "Gentle Cleaner",
      description:
        "Mild cleaning solution for delicate surfaces and everyday cleaning.",
    },
    {
      name: "Genteel Gel",
      image: "/GenteelGel.jpg",
      category: "Gel Cleaner",
      description:
        "Thick gel formula for vertical surfaces and extended contact cleaning.",
    },
    {
      name: "Genteel Soft",
      image: "/GenteelSoft.jpg",
      category: "Soft Cleaner",
      description:
        "Extra gentle formula for sensitive surfaces and skin-friendly cleaning.",
    },
    {
      name: "Germi Check",
      image: "/GermiCheck.jpg",
      category: "Disinfectant",
      description:
        "Hospital-grade disinfectant that eliminates 99.9% of germs and bacteria.",
    },
    {
      name: "Hand Cleanzor",
      image: "/HandCleanzor.jpg",
      category: "Hand Sanitizer",
      description:
        "Alcohol-based hand sanitizer for effective hand hygiene and disinfection.",
    },
    {
      name: "Multi Clean",
      image: "/MultiClean.jpg",
      category: "All-Purpose Cleaner",
      description:
        "Versatile cleaner suitable for multiple surfaces and cleaning applications.",
    },
    {
      name: "Scale Buster",
      image: "/ScaleBuster.jpg",
      category: "Descaling Agent",
      description:
        "Effective scale remover for equipment and surface mineral deposit removal.",
    },
    {
      name: "Scale Buster Plus",
      image: "/ScaleBusterPlus.jpg",
      category: "Heavy Duty Descaler",
      description:
        "Enhanced formula for tough scale and mineral deposit removal.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Product
            </span>{" "}
            Catalogue
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our comprehensive range of professional cleaning and
            housekeeping products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Download Complete Catalog</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HouseKeepingProductCatalogue;
