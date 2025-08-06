import { useEffect, useRef } from "react";

const TrustedPartnersSection = () => {
  const partnersScrollRef = useRef(null);
  const animationRef = useRef(null);
  const isPausedRef = useRef(false);

  // Auto-scroll with wheel event handling
  useEffect(() => {
    const container = partnersScrollRef.current;
    if (!container) return;

    // Auto-scroll animation
    const autoScroll = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += 1;

        // Infinite loop: reset when halfway through the duplicated content
        const maxScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    // Wheel event handler (non-passive)
    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const scrollAmount = e.deltaY > 0 ? 200 : -200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    // Start animation and add wheel listener
    animationRef.current = requestAnimationFrame(autoScroll);
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const partners = [
    {
      name: "CHEMLife",
      logoUrl: "/images/partners/chemlifelogo.jpg",
      website: "https://chemlifeinnovations.com",
      industry: "Bioactives",
    },
    {
      name: "IFFCO",
      logoUrl: "/images/partners/IFFC%20logo.svg",
      website: "https://www.iffco.in",
      industry: "Agriculture",
    },
    {
      name: "Vetogen Animal Health",
      logoUrl: "/images/partners/Vetogen-Logo_PNG-474x157.png",
      website: "https://vetogen.com",
      industry: "Animal Health",
    },
    {
      name: "Wellthought Chemicals",
      logoUrl: "/images/partners/WellThoughtChemicalsLogo.jpg",
      website: "https://wellthought.in",
      industry: "Industrial Chemicals",
    },
    {
      name: "Flavour Trove",
      logoUrl: "/images/partners/flavourtrovelogo.png",
      website: "https://flavourtrove.com",
      industry: "Herbal Extract",
    },
    {
      name: "Shobha Enterprises",
      logoUrl: "/images/partners/shobhaenterpriseslogo.jpg",
      website: "https://shobha.com",
      industry: "Trading",
    },
    {
      name: "Sri Sharada",
      logoUrl: "/images/partners/srisharadalogo%20-271-1.png",
      website: "https://sharadaayurveda.com",
      industry: "Ayurveda",
    },
    {
      name: "Biovet",
      logoUrl: "/images/partners/biovet-logo-final.png",
      website: "https://www.biovet.in",
      industry: "Animal Health Care",
    },
    {
      name: "Neotel Technology",
      logoUrl: "/images/partners/neotel-logo.png",
      website: "https://neotel.com",
      industry: "Technology",
    },
    {
      name: "Arka Allied Chemicals",
      logoUrl: "https://arkallied.com/favicon.ico",
      website: "https://arkallied.com",
      industry: "Agriculture",
    },
    {
      name: "ABI Corporation",
      logoUrl: "https://abicorp.com/favicon.ico",
      website: "https://abicorp.com",
      industry: "Corporate",
    },

    {
      name: "Seashell",
      logoUrl: "https://seashell.com/favicon.ico",
      website: "https://seashell.com",
      industry: "Marine",
    },
    {
      name: "Pavmaga Enterprises",
      logoUrl: "https://pavmaga.com/favicon.ico",
      website: "https://pavmaga.com",
      industry: "Industrial",
    },
    {
      name: "Evergreen",
      logoUrl: "https://evergreen.com/favicon.ico",
      website: "https://evergreen.com",
      industry: "Agriculture",
    },
    {
      name: "Krishna Floor Mills",
      logoUrl: "https://krishnamills.in/favicon.ico",
      website: "https://krishnamills.in",
      industry: "Food Processing",
    },
    {
      name: "SIFLON",
      logoUrl: "https://siflon.com/favicon.ico",
      website: "https://siflon.com",
      industry: "Industrial",
    },
    {
      name: "Makair",
      logoUrl: "https://makair.com/favicon.ico",
      website: "https://makair.com",
      industry: "HVAC",
    },
    {
      name: "Lohitha Laboratories",
      logoUrl: "https://lohitha.com/favicon.ico",
      website: "https://lohitha.com",
      industry: "Laboratory",
    },
    {
      name: "Sudha Minelcherry",
      logoUrl: "https://sudhamine.com/favicon.ico",
      website: "https://sudhamine.com",
      industry: "Mining",
    },
    {
      name: "Rangalakishmi Netralaya",
      logoUrl: "https://rangalakishmi.com/favicon.ico",
      website: "https://rangalakishmi.com",
      industry: "Healthcare",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background gradient overlay - Matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/40 via-white/0 to-cyan-100/40 pointer-events-none"></div>
      {/* Blurred shapes for depth - Matching other sections */}
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Our Partners
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with innovative companies across diverse
            industries
          </p>
        </div>

        {/* Partners Showcase - Enhanced Glass Design */}
        <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-emerald-200/50 p-8 mb-16 overflow-hidden">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-white/40 to-cyan-50/80 pointer-events-none"></div>

          {/* Partners Container - Fixed Scrolling */}
          <div className="relative">
            <div
              ref={partnersScrollRef}
              id="partners-scroll"
              className="flex overflow-x-auto gap-6 py-6 scrollbar-hide cursor-grab active:cursor-grabbing"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
              onMouseDown={(e) => {
                isPausedRef.current = true;
                const container = e.currentTarget;
                const startX = e.pageX - container.offsetLeft;
                const scrollLeft = container.scrollLeft;
                let isDown = true;

                const handleMouseMove = (e) => {
                  if (!isDown) return;
                  e.preventDefault();
                  const x = e.pageX - container.offsetLeft;
                  const walk = (x - startX) * 2;
                  container.scrollLeft = scrollLeft - walk;
                };

                const handleMouseUp = () => {
                  isDown = false;
                  isPausedRef.current = false;
                  document.removeEventListener("mousemove", handleMouseMove);
                  document.removeEventListener("mouseup", handleMouseUp);
                  container.classList.remove("select-none");
                };

                container.classList.add("select-none");
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
              }}
              onMouseEnter={() => {
                isPausedRef.current = true;
              }}
              onMouseLeave={() => {
                isPausedRef.current = false;
              }}
            >
              {/* Render partners twice for infinite scroll effect */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group flex-shrink-0 transition-all duration-300 hover:scale-105 select-none"
                  draggable={false}
                >
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center"
                  >
                    <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100">
                      <img
                        src={partner.logoUrl}
                        alt={`${partner.name} logo`}
                        className="w-24 h-24 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                        draggable={false}
                      />
                      <div
                        className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-cyan-500 text-white font-bold text-3xl rounded-xl"
                        style={{ display: "none" }}
                      >
                        {partner.name.charAt(0)}
                      </div>
                    </div>
                    <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors text-sm mb-2 max-w-32 mx-auto leading-tight">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-slate-600 group-hover:text-emerald-600 transition-colors max-w-32 mx-auto bg-emerald-50/50 rounded-full px-2 py-1">
                      {partner.industry}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Instructions - Enhanced Glass Style */}
          <div className="relative text-center mt-6 pt-6 border-t border-emerald-200/50">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-emerald-800 text-sm font-semibold bg-emerald-50/80 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-200/50">
                20 Verified Partners • Drag to explore or use mouse wheel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
