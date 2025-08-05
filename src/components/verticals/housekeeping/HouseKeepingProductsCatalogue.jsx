const HouseKeepingProducts = () => {
  const products = [
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
      application: "All types of Floors, Toilets. Recommended for regular use.",
      usage: "10–20 ml in 1 liter of Water.",
      image: "GermiCheck.jpg",
    },
    {
      name: "Multi Clean – Multi Purpose Cleaner",
      description:
        "General purpose cleaner concentrate. Removes rigid stains from any floor or material without damage. Suitable for manual and auto cleaning. No rinsing required. Neutral reaction.",
      benefits: ["Cleans all types of surfaces and floors"],
      application:
        "Ideal for all types of walls, Floors & Furniture etc. Recommended for regular use.",
      usage: "10–20 ml in 1 liter of water.",
      image: "MultiClean.jpg",
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
      image: "DeepClean.jpg",
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
      image: "Degreaser.jpg",
    },
    {
      name: "Scale Buster Plus (De-Scaler and Toilet Bowl Cleaner)",
      description:
        "High viscosity, potent scale remover and toilet bowl cleaner. Removes hard water mineral deposits, stains, and soap scum. Acid-based, non-foaming.",
      benefits: ["Removes Scale, stubborn dirt"],
      application: "Ceramic Tiles, Wash basins and Toilets",
      usage:
        "Ready to use. Apply with gloves, leave for a few minutes, scrub, rinse.",
      image: "ScaleBusterPlus.jpg",
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
      application: "Ceramic Tiles, Wash Basins & Toilets, Acidic Product.",
      usage: "Ready to use. Use gloves. Apply, leave, scrub, rinse.",
      image: "ScaleBuster.jpg",
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
      image: "CrystalDew.jpg",
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
      application: "All sorts of Industries, Hospitals, Hotels & Restaurants.",
      usage: "Ready to use. Apply, rub, rinse. Recommended for regular use.",
      image: "Genteel.jpg",
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
      application: "All sorts of Industries, Hospitals, Hotels, Restaurants.",
      usage: "Ready to use. Apply, lather, rinse.",
      image: "GenteelSoft.jpg",
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
      application: "Offices, Industries, Hospitals, Hotels and Restaurants.",
      usage: "Ready to use. Apply, lather, rinse.",
      image: "GenteelGel.jpg",
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
      image: "Bactiwash.jpg",
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
      image: "HandCleanzor.jpg",
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
      image: "DishDew.jpg",
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
      image: "DishWash.jpg",
    },
  ];

  return (
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
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-xl shadow-md max-w-2xl mx-auto mb-10">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-[10px] px-8 py-6">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => {
            const imageUrl = `${import.meta.env.BASE_URL}${product.image}`;
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
                  {product.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
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
                    <span className="font-semibold text-slate-900">Usage:</span>{" "}
                    {product.usage}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseKeepingProducts;
