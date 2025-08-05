import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState("");
  const [isNavigating, setIsNavigating] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Copy email to clipboard function with improved feedback
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEmail(text);

      // Create a more visible success notification
      const notification = document.createElement("div");
      notification.textContent = "Copied to clipboard!";
      notification.className =
        "fixed top-20 right-6 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce";
      document.body.appendChild(notification);

      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);

      setTimeout(() => setCopiedEmail(""), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopiedEmail(text);
        setTimeout(() => setCopiedEmail(""), 3000);
      } catch (fallbackErr) {
        console.error("Fallback copy failed: ", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  // Track scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const verticals = [
    {
      name: "Risk Management Analysis",
      path: "/sourcing-risk",
      icon: "📊⚠️",
    },
    { name: "Project Management", path: "/projects", icon: "🎯" },
    { name: "House Keeping Products", path: "/housekeeping", icon: "🏠" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigate and scroll to top function
  const navigateAndScrollToTop = () => {
    setIsNavigating(true);
    scrollToTop();
    setIsMobileMenuOpen(false);
    // Reset navigation state after a short delay
    setTimeout(() => setIsNavigating(false), 300);
  };

  // Helper: get theme classes for scroll-to-top button
  const getScrollTopTheme = (pathname) => {
    if (pathname === "/sourcing-risk") {
      return {
        bg: "bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 focus:ring-yellow-300 border-yellow-400/80",
        ring: "focus:ring-yellow-300 border-yellow-400/80",
      };
    } else if (pathname === "/projects") {
      return {
        bg: "bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 focus:ring-orange-300 border-orange-400/80",
        ring: "focus:ring-orange-300 border-orange-400/80",
      };
    } else if (pathname === "/housekeeping") {
      return {
        bg: "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 focus:ring-purple-300 border-blue-400/80 border-purple-400/80",
        ring: "focus:ring-purple-300 border-blue-400/80 border-purple-400/80",
      };
    } else {
      // Home and default
      return {
        bg: "bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 focus:ring-emerald-300 border-emerald-400/80",
        ring: "focus:ring-emerald-300 border-emerald-400/80",
      };
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 scroll-smooth relative no-select">
      {/* Subtle background gradient overlay for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 no-select"
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(37,99,235,0.08) 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(124,58,237,0.07) 0%, transparent 70%), linear-gradient(120deg, rgba(16,185,129,0.04) 0%, rgba(234,179,8,0.03) 100%)",
          mixBlendMode: "normal",
        }}
      ></div>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200"
        onClick={() => document.getElementById("main-content")?.focus()}
      >
        Skip to main content
      </a>

      {/* Loading Progress Bar */}
      {isNavigating && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse"></div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-2">
            <div className="flex items-center">
              <Link to="/" onClick={scrollToTop} className="cursor-pointer">
                <Logo size="medium" showText={true} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                onClick={navigateAndScrollToTop}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  location.pathname === "/"
                    ? "text-emerald-700 bg-gradient-to-r from-emerald-100 to-cyan-50 shadow-sm"
                    : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                Home
                {location.pathname === "/" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full"></div>
                )}
              </Link>
              {verticals.map((vertical) => {
                const isSourcingRisk =
                  vertical.name === "Risk Management Analysis";
                const isProjectManagement =
                  vertical.name === "Project Management";
                const isHouseKeeping =
                  vertical.name === "House Keeping Products";
                const isActive = location.pathname === vertical.path;

                // Determine theme colors based on page
                let activeColors, hoverColors, dotColors;
                if (isSourcingRisk) {
                  activeColors =
                    "text-yellow-700 bg-gradient-to-r from-yellow-100 to-red-50 shadow-sm";
                  hoverColors =
                    "text-slate-700 hover:text-yellow-700 hover:bg-yellow-50";
                  dotColors = "bg-gradient-to-r from-yellow-500 to-red-600";
                } else if (isProjectManagement) {
                  activeColors =
                    "text-orange-700 bg-gradient-to-r from-orange-100 to-pink-50 shadow-sm";
                  hoverColors =
                    "text-slate-700 hover:text-orange-700 hover:bg-orange-50";
                  dotColors = "bg-gradient-to-r from-orange-500 to-pink-600";
                } else if (isHouseKeeping) {
                  // House Keeping Products uses blue-purple gradient
                  activeColors =
                    "text-blue-700 bg-gradient-to-r from-blue-100 to-purple-100 shadow-sm";
                  hoverColors =
                    "text-slate-700 hover:text-blue-700 hover:bg-blue-50";
                  dotColors = "bg-gradient-to-r from-blue-500 to-purple-500";
                } else {
                  // Default emerald/cyan theme (was blue)
                  activeColors =
                    "text-emerald-700 bg-gradient-to-r from-emerald-100 to-cyan-50 shadow-sm";
                  hoverColors =
                    "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50";
                  dotColors = "bg-gradient-to-r from-emerald-500 to-cyan-600";
                }

                return (
                  <Link
                    key={vertical.path}
                    to={vertical.path}
                    onClick={navigateAndScrollToTop}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                      isActive ? activeColors : hoverColors
                    }`}
                  >
                    <span className="mr-2">{vertical.icon}</span>
                    {vertical.name}
                    {isActive && (
                      <div
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full ${dotColors}`}
                      ></div>
                    )}
                  </Link>
                );
              })}
              {/* <Link
                to="/contact"
                onClick={navigateAndScrollToTop}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  location.pathname === "/contact"
                    ? "text-purple-700 bg-gradient-to-r from-purple-100 to-blue-50 shadow-sm"
                    : "text-slate-700 hover:text-purple-700 hover:bg-purple-50"
                }`}
              >
                <span className="mr-2">✉️</span>Contact
                {location.pathname === "/contact" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"></div>
                )}
              </Link> */}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label={
                  isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
                }
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
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
            <>
              {/* Backdrop overlay */}
              <div
                className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
              ></div>
              <div
                id="mobile-menu"
                className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md relative z-50"
                role="navigation"
                aria-label="Mobile navigation menu"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link
                    to="/"
                    onClick={navigateAndScrollToTop}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === "/"
                        ? "text-emerald-700 bg-gradient-to-r from-emerald-100 to-cyan-50"
                        : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
                    }`}
                  >
                    🏠 Home
                  </Link>
                  {verticals.map((vertical) => {
                    const isSourcingRisk =
                      vertical.name ===
                      "Ingredient Sourcing & Risk Management Analysis";
                    const isProjectManagement =
                      vertical.name === "Project Management";
                    const isHouseKeeping =
                      vertical.name === "House Keeping Products";
                    const isActive = location.pathname === vertical.path;

                    // Determine theme colors based on page
                    let activeColors, hoverColors;
                    if (isSourcingRisk) {
                      activeColors =
                        "text-yellow-700 bg-gradient-to-r from-yellow-100 to-red-50";
                      hoverColors =
                        "text-slate-700 hover:text-yellow-700 hover:bg-yellow-50";
                    } else if (isProjectManagement) {
                      activeColors =
                        "text-orange-700 bg-gradient-to-r from-orange-100 to-pink-50";
                      hoverColors =
                        "text-slate-700 hover:text-orange-700 hover:bg-orange-50";
                    } else if (isHouseKeeping) {
                      activeColors =
                        "text-blue-700 bg-gradient-to-r from-blue-100 to-purple-100";
                      hoverColors =
                        "text-slate-700 hover:text-blue-700 hover:bg-slate-100";
                    } else {
                      // Default blue theme
                      activeColors = activeColors =
                        "text-emerald-700 bg-gradient-to-r from-emerald-100 to-cyan-50";
                      hoverColors =
                        "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50";
                    }

                    return (
                      <Link
                        key={vertical.path}
                        to={vertical.path}
                        onClick={navigateAndScrollToTop}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isActive ? activeColors : hoverColors
                        }`}
                      >
                        <span className="mr-2">{vertical.icon}</span>
                        {vertical.name}
                      </Link>
                    );
                  })}
                  {/* <Link
                    to="/contact"
                    onClick={navigateAndScrollToTop}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === "/contact"
                        ? "text-purple-700 bg-gradient-to-r from-purple-100 to-blue-50"
                        : "text-slate-700 hover:text-purple-700 hover:bg-purple-50"
                    }`}
                  >
                    <span className="mr-2">✉️</span>Contact
                  </Link> */}
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1" tabIndex="-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        {/* Enhanced background decorative overlays for more depth */}
        <div className="absolute inset-0">
          {/* Existing blurred circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl transform rotate-12"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          {/* New subtle radial gradient overlay for footer depth */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 80% 80%, rgba(234,179,8,0.08) 0%, transparent 70%), radial-gradient(ellipse at 20% 20%, rgba(37,99,235,0.06) 0%, transparent 70%)",
              mixBlendMode: "soft-light",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Company Section */}
              <div className="lg:col-span-1">
                <div className="pr-0 lg:pr-8">
                  <div className="mb-6">
                    <Logo size="large" showText={true} className="text-white" />
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-lg">
                    Empowering enterprise transformation through strategic
                    innovation across our specialized domains of excellence.
                  </p>
                  <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 rounded-lg p-4 mb-6 max-w-lg">
                    <p className="text-red-300 text-lg font-bold italic text-center">
                      "The Right Choice for your business transformation"
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
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
                      className="group bg-gray-800/60 backdrop-blur-sm p-3 rounded-xl border border-gray-700/60 hover:border-blue-600/60 hover:bg-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg
                        className="h-5 w-5 text-gray-300 group-hover:text-blue-500 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="group bg-gray-800/60 backdrop-blur-sm p-3 rounded-xl border border-gray-700/60 hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="h-5 w-5 text-gray-300 group-hover:text-blue-500 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="group bg-gray-800/60 backdrop-blur-sm p-3 rounded-xl border border-gray-700/60 hover:border-pink-400/60 hover:bg-pink-500/10 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg
                        className="h-5 w-5 text-gray-300 group-hover:text-pink-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.017 0C8.396 0 7.896.013 6.688.072 5.48.132 4.634.333 3.892.63a5.89 5.89 0 0 0-2.131 1.388A5.89 5.89 0 0 0 .373 4.15C.076 4.892-.125 5.738-.185 6.946-.244 8.154-.257 8.654-.257 12.274s.013 4.12.072 5.328c.06 1.208.261 2.054.558 2.796a5.89 5.89 0 0 0 1.388 2.131 5.89 5.89 0 0 0 2.131 1.388c.742.297 1.588.498 2.796.558 1.208.059 1.708.072 5.328.072s4.12-.013 5.328-.072c1.208-.06 2.054-.261 2.796-.558a5.89 5.89 0 0 0 2.131-1.388 5.89 5.89 0 0 0 1.388-2.131c.297-.742.498-1.588.558-2.796.059-1.208.072-1.708.072-5.328s-.013-4.12-.072-5.328c-.06-1.208-.261-2.054-.558-2.796a5.89 5.89 0 0 0-1.388-2.131A5.89 5.89 0 0 0 19.708.63C18.966.333 18.12.132 16.912.072 15.704.013 15.204 0 11.584 0h.433zm-1.068 2.184c.308-.006.646-.006 1.068-.006 3.6 0 4.028.011 5.45.065 1.315.06 2.03.278 2.506.463.63.245 1.08.538 1.552 1.01s.765.922 1.01 1.552c.185.476.403 1.19.463 2.506.054 1.422.065 1.85.065 5.45s-.011 4.028-.065 5.45c-.06 1.315-.278 2.03-.463 2.506-.245.63-.538 1.08-1.01 1.552s-.922.765-1.552 1.01c-.476.185-1.19.403-2.506.463-1.422.054-1.85.065-5.45.065s-4.028-.011-5.45-.065c-1.315-.06-2.03-.278-2.506-.463a4.172 4.172 0 0 1-1.552-1.01 4.172 4.172 0 0 1-1.01-1.552c-.185-.476-.403-1.19-.463-2.506-.054-1.422-.065-1.85-.065-5.45s.011-4.028.065-5.45c.06-1.315.278-2.03.463-2.506.245-.63.538-1.08 1.01-1.552s.922-.765 1.552-1.01c.476-.185 1.19-.403 2.506-.463 1.244-.056 1.725-.07 4.382-.073v.003zm-1.013 3.556a6.334 6.334 0 1 0 6.334 6.334 6.334 6.334 0 0 0-6.334-6.334zm0 10.445a4.111 4.111 0 1 1 4.111-4.111 4.111 4.111 0 0 1-4.111 4.111zm6.612-10.671a1.48 1.48 0 1 1-1.48-1.48 1.48 1.48 0 0 1 1.48 1.48z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="lg:col-span-1">
                <div className="h-full">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l.58-.288 1.302 2.606-.58.288A11.947 11.947 0 0112 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12c0 1.457-.261 2.853-.73 4.133l-.288.781-1.923-.712.288-.781A9.926 9.926 0 0022 12c0-5.514-4.486-10-10-10zm0 15c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
                        <circle
                          cx="18.5"
                          cy="5.5"
                          r="3.5"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Contact Information
                  </h4>

                  <div className="space-y-4">
                    {/* Top Row: Email Contacts and Phone Numbers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email Contacts */}
                      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/60 hover:border-rose-400/40 transition-all duration-300">
                        <h5 className="text-rose-300 font-semibold mb-3 flex items-center text-sm">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          Email Contacts
                        </h5>
                        <div className="space-y-3">
                          <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/50 hover:border-rose-400/50 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                              <div className="flex-1 min-w-0 pr-2">
                                <p className="text-xs text-gray-400 mb-1 font-medium">
                                  Sourcing & Risk
                                </p>
                                <a
                                  href="mailto:resolutesolutions.connect@gmail.com?subject=Inquiry%20about%20Ingredient%20Sourcing%20and%20Risk%20Management%20Services"
                                  className="text-rose-300 hover:text-rose-200 transition-colors"
                                  title="Send email to Ingredient Sourcing & Risk Management team"
                                  aria-label="Email Ingredient Sourcing and Risk Management team"
                                >
                                  <span className="text-xs font-medium hover:underline group-hover:text-rose-100 break-all">
                                    resolutesolutions.connect@gmail.com
                                  </span>
                                </a>
                              </div>
                              <div className="flex-shrink-0">
                                <button
                                  onClick={() =>
                                    copyToClipboard(
                                      "resolutesolutions.connect@gmail.com"
                                    )
                                  }
                                  className="p-2 text-gray-400 hover:text-rose-300 transition-colors opacity-0 group-hover:opacity-100"
                                  title={
                                    copiedEmail ===
                                    "resolutesolutions.connect@gmail.com"
                                      ? "Copied!"
                                      : "Copy email address"
                                  }
                                  aria-label="Copy email address to clipboard"
                                >
                                  {copiedEmail ===
                                  "resolutesolutions.connect@gmail.com" ? (
                                    <svg
                                      className="w-5 h-5 text-rose-400"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      className="w-5 h-5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                    </svg>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/50 hover:border-rose-400/50 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className="text-xs text-gray-400 mb-1 font-medium">
                                  Project Management
                                </p>
                                <a
                                  href="mailto:resolutesolutions@hotmail.com?subject=Inquiry%20about%20Project%20Management%20Services"
                                  className="text-rose-300 hover:text-rose-200 transition-colors"
                                  title="Send email to Project Management team"
                                  aria-label="Email Project Management team"
                                >
                                  <span className="text-xs font-medium hover:underline group-hover:text-rose-100">
                                    resolutesolutions@hotmail.com
                                  </span>
                                </a>
                              </div>
                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    "resolutesolutions@hotmail.com"
                                  )
                                }
                                className="ml-3 p-2 text-gray-400 hover:text-rose-300 transition-colors opacity-0 group-hover:opacity-100"
                                title={
                                  copiedEmail ===
                                  "resolutesolutions@hotmail.com"
                                    ? "Copied!"
                                    : "Copy email address"
                                }
                                aria-label="Copy email address to clipboard"
                              >
                                {copiedEmail ===
                                "resolutesolutions@hotmail.com" ? (
                                  <svg
                                    className="w-5 h-5 text-rose-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Phone Numbers */}
                      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/60 hover:border-violet-400/40 transition-all duration-300">
                        <h5 className="text-violet-300 font-semibold mb-3 flex items-center text-sm">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          Phone Numbers
                        </h5>
                        <div className="space-y-2">
                          <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/50 hover:border-violet-400/50 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                              <a
                                href="tel:+918073570073"
                                className="flex-1 text-violet-300 hover:text-violet-200 transition-colors"
                                title="Call +91 8073570073"
                                aria-label="Call phone number +91 8073570073"
                              >
                                <span className="text-xs font-medium">
                                  +91 8073570073
                                </span>
                              </a>
                              <button
                                onClick={() => copyToClipboard("+918073570073")}
                                className="ml-3 p-2 text-gray-400 hover:text-violet-300 transition-colors opacity-0 group-hover:opacity-100"
                                title={
                                  copiedEmail === "+918073570073"
                                    ? "Copied!"
                                    : "Copy phone number"
                                }
                                aria-label="Copy phone number to clipboard"
                              >
                                {copiedEmail === "+918073570073" ? (
                                  <svg
                                    className="w-5 h-5 text-violet-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>
                          <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/50 hover:border-violet-400/50 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                              <a
                                href="tel:+919741111714"
                                className="flex-1 text-violet-300 hover:text-violet-200 transition-colors"
                                title="Call +91 9741111714"
                                aria-label="Call phone number +91 9741111714"
                              >
                                <span className="text-xs font-medium">
                                  +91 9741111714
                                </span>
                              </a>
                              <button
                                onClick={() => copyToClipboard("+919741111714")}
                                className="ml-3 p-2 text-gray-400 hover:text-violet-300 transition-colors opacity-0 group-hover:opacity-100"
                                title={
                                  copiedEmail === "+919741111714"
                                    ? "Copied!"
                                    : "Copy phone number"
                                }
                                aria-label="Copy phone number to clipboard"
                              >
                                {copiedEmail === "+919741111714" ? (
                                  <svg
                                    className="w-5 h-5 text-violet-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Address and GST */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Address */}
                      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/60 hover:border-emerald-400/40 transition-all duration-300">
                        <h5 className="text-emerald-300 font-semibold mb-3 flex items-center text-sm">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 6.343l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Office Address
                        </h5>
                        <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/50 hover:border-emerald-400/50 transition-all duration-300 group">
                          <div className="flex items-start justify-between">
                            <address className="flex-1 text-emerald-200 text-xs not-italic leading-relaxed pr-2">
                              <div className="font-medium text-emerald-100 mb-1">
                                #9, 3rd Cross, Sir MV Layout
                              </div>
                              <div className="text-emerald-200">
                                Hesaraghatta Road, Bagalagunte
                              </div>
                              <div className="text-emerald-200">
                                Bengaluru 560073, India
                              </div>
                            </address>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  "#9, 3rd Cross, Sir MV Layout, Hesaraghatta Road, Bagalagunte, Bengaluru 560073, India"
                                )
                              }
                              className="p-2 text-gray-400 hover:text-emerald-300 transition-colors opacity-0 group-hover:opacity-100"
                              title={
                                copiedEmail ===
                                "#9, 3rd Cross, Sir MV Layout, Hesaraghatta Road, Bagalagunte, Bengaluru 560073, India"
                                  ? "Copied!"
                                  : "Copy address"
                              }
                              aria-label="Copy address to clipboard"
                            >
                              {copiedEmail ===
                              "#9, 3rd Cross, Sir MV Layout, Hesaraghatta Road, Bagalagunte, Bengaluru 560073, India" ? (
                                <svg
                                  className="w-5 h-5 text-emerald-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* GST */}
                      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/60 hover:border-amber-400/40 transition-all duration-300">
                        <h5 className="text-amber-300 font-semibold mb-3 flex items-center text-sm">
                          <svg
                            className="w-4 h-4 mr-2"
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
                        <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/50 hover:border-amber-400/50 transition-all duration-300 group">
                          <div className="flex items-center justify-between">
                            <div className="flex-1 mr-3">
                              <p className="text-amber-200 text-xs font-mono tracking-wider text-center px-2 py-2">
                                29AHXPJ7565P1ZY
                              </p>
                            </div>
                            <button
                              onClick={() => copyToClipboard("29AHXPJ7565P1ZY")}
                              className="p-2 text-gray-400 hover:text-amber-300 transition-colors opacity-0 group-hover:opacity-100"
                              title={
                                copiedEmail === "29AHXPJ7565P1ZY"
                                  ? "Copied!"
                                  : "Copy GST number"
                              }
                              aria-label="Copy GST number to clipboard"
                            >
                              {copiedEmail === "29AHXPJ7565P1ZY" ? (
                                <svg
                                  className="w-5 h-5 text-amber-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800/60 pt-8 pb-6">
            <div className="flex flex-col items-center space-y-4">
              {/* Top - Legal links */}
              <div className="flex items-baseline justify-center space-x-4 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:underline font-medium"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-600 leading-none">•</span>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:underline font-medium"
                >
                  Terms of Service
                </a>
                <span className="text-gray-600 leading-none">•</span>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors hover:underline font-medium"
                >
                  Cookie Policy
                </a>
                <span className="text-gray-600 leading-none">•</span>
                {/* <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors hover:underline font-medium"
                >
                  Contact
                </Link> */}
              </div>

              {/* Bottom row - Copyright and Made in Bengaluru */}
              <div className="flex flex-col sm:flex-row justify-between items-center w-full space-y-2 sm:space-y-0">
                {/* Left - Copyright */}
                <div className="flex items-center">
                  <p className="text-gray-400 text-sm font-medium">
                    &copy; 2025 Resolute Solutions. All rights reserved.
                  </p>
                </div>

                {/* Center - Back to top link */}
                <div className="flex items-center">
                  <button
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                    aria-label="Scroll to top of page"
                  >
                    ↑ Back to Top
                  </button>
                </div>

                {/* Right - Made in Bengaluru */}
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
                  <span className="text-orange-400 font-semibold">
                    Bengaluru
                  </span>
                  <span className="text-orange-400">🇮🇳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 p-3 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-4 animate-bounce border-2 ${
            getScrollTopTheme(location.pathname).bg
          }`}
          title="Scroll to top"
          aria-label="Scroll to top of page"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollToTop();
            }
          }}
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Layout;
