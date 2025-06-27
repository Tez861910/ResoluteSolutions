import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const verticals = [
    { name: "House Keeping Products", path: "/housekeeping", icon: "🏠" },
    { name: "Ingredient Sourcing", path: "/sourcing", icon: "🌾" },
    { name: "Risk Management Analysis", path: "/risk", icon: "📊" },
    { name: "Project Management", path: "/projects", icon: "🎯" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-2">
            <Link to="/" className="flex items-center">
              <Logo size="medium" showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  location.pathname === "/"
                    ? "text-blue-700 bg-gradient-to-r from-blue-100 to-blue-50 shadow-sm"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-100"
                }`}
              >
                Home
                {location.pathname === "/" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                )}
              </Link>
              {verticals.map((vertical) => (
                <Link
                  key={vertical.path}
                  to={vertical.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    location.pathname === vertical.path
                      ? "text-blue-700 bg-gradient-to-r from-blue-100 to-blue-50 shadow-sm"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="mr-2">{vertical.icon}</span>
                  {vertical.name.split(" ").slice(0, 2).join(" ")}
                  {location.pathname === vertical.path && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === "/"
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-100"
                  }`}
                >
                  🏠 Home
                </Link>
                {verticals.map((vertical) => (
                  <Link
                    key={vertical.path}
                    to={vertical.path}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === vertical.path
                        ? "text-blue-700 bg-blue-50"
                        : "text-slate-700 hover:text-blue-700 hover:bg-slate-100"
                    }`}
                  >
                    <span className="mr-2">{vertical.icon}</span>
                    {vertical.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl transform rotate-12"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Company Section */}
              <div className="lg:col-span-5">
                <div className="pr-0 lg:pr-8">
                  <div className="mb-8">
                    <Logo size="large" showText={true} className="text-white" />
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-lg">
                    Empowering enterprise transformation through strategic
                    innovation across our specialized domains of excellence.
                  </p>
                  <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 rounded-lg p-4 mb-8 max-w-lg">
                    <p className="text-red-300 text-lg font-bold italic text-center">
                      "The Right Choice for your business transformation"
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="group bg-gray-800/60 backdrop-blur-sm p-3 rounded-xl border border-gray-700/60 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <svg
                        className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="group bg-gray-800/60 backdrop-blur-sm p-3 rounded-xl border border-gray-700/60 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="group bg-gray-800/60 backdrop-blur-sm p-3 rounded-xl border border-gray-700/60 hover:border-green-400/60 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                      aria-label="WhatsApp"
                    >
                      <svg
                        className="h-5 w-5 text-gray-300 group-hover:text-green-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Verticals Section */}
              <div className="lg:col-span-3">
                <div className="h-full">
                  <h4 className="text-xl font-bold text-white mb-8 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Our Verticals
                  </h4>
                  <div className="space-y-3">
                    {verticals.map((vertical) => (
                      <div key={vertical.path} className="group">
                        <Link
                          to={vertical.path}
                          className="flex items-center p-4 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/60 hover:border-blue-400/60 hover:bg-gray-700/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
                        >
                          <span className="text-2xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            {vertical.icon}
                          </span>
                          <span className="text-gray-300 group-hover:text-white font-medium transition-colors">
                            {vertical.name}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="lg:col-span-4">
                <div className="h-full">
                  <h4 className="text-xl font-bold text-white mb-8 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    Contact Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Contacts */}
                    <div className="sm:col-span-2 bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/60 hover:border-blue-400/40 transition-all duration-300">
                      <h5 className="text-blue-300 font-semibold mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Email Contacts
                      </h5>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600/50">
                          <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-medium">
                            Ingredient Sourcing
                          </p>
                          <a
                            href="mailto:resolutesolutions.connect@gmail.com"
                            className="text-blue-300 hover:text-blue-200 transition-colors text-sm block break-all hover:underline"
                          >
                            resolutesolutions.connect@gmail.com
                          </a>
                        </div>
                        <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600/50">
                          <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-medium">
                            Engineering & Project Management
                          </p>
                          <a
                            href="mailto:resolutesolutions@hotmail.com"
                            className="text-blue-300 hover:text-blue-200 transition-colors text-sm block hover:underline"
                          >
                            resolutesolutions@hotmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/60 hover:border-green-400/40 transition-all duration-300">
                      <h5 className="text-green-300 font-semibold mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Phone Numbers
                      </h5>
                      <div className="space-y-3">
                        <a
                          href="tel:+918073570073"
                          className="flex items-center justify-between bg-gray-900/50 rounded-lg p-3 border border-gray-600/50 text-green-300 hover:text-green-200 hover:border-green-400/50 transition-all duration-300 group"
                        >
                          <span className="text-sm font-medium">
                            +91 8073570073
                          </span>
                          <svg
                            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </a>
                        <a
                          href="tel:+919741111714"
                          className="flex items-center justify-between bg-gray-900/50 rounded-lg p-3 border border-gray-600/50 text-green-300 hover:text-green-200 hover:border-green-400/50 transition-all duration-300 group"
                        >
                          <span className="text-sm font-medium">
                            +91 9741111714
                          </span>
                          <svg
                            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/60 hover:border-purple-400/40 transition-all duration-300">
                      <h5 className="text-purple-300 font-semibold mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Office Address
                      </h5>
                      <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600/50">
                        <address className="text-gray-300 text-sm not-italic leading-relaxed">
                          <div className="font-medium text-white mb-1">
                            #9, 3rd Cross, Sir MV Layout
                          </div>
                          <div>Hesaraghatta Road, Bagalagunte</div>
                          <div>Bengaluru 560073, India</div>
                        </address>
                      </div>
                    </div>

                    {/* GST */}
                    <div className="sm:col-span-2 bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/60 hover:border-yellow-400/40 transition-all duration-300">
                      <h5 className="text-yellow-300 font-semibold mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GST Number
                      </h5>
                      <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600/50">
                        <p className="text-yellow-300 text-lg font-mono tracking-wider text-center bg-gradient-to-r from-yellow-400/20 to-amber-400/20 px-4 py-2 rounded-lg border border-yellow-400/30">
                          29AHXPJ7565P1ZY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800/60 pt-8 pb-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Left side - Copyright and legal links */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <p className="text-gray-400 text-sm font-medium">
                  &copy; 2025 Resolute Solutions. All rights reserved.
                </p>
                <div className="flex space-x-4 text-sm">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    Terms of Service
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>

              {/* Right side - Made in Bengaluru */}
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Crafted with</span>
                <svg
                  className="w-4 h-4 text-red-500 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>in</span>
                <span className="text-orange-400 font-semibold">Bengaluru</span>
                <span className="text-orange-400">🇮🇳</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
