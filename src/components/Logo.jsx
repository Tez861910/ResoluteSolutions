// Logo component that uses the actual brand logo
import logoImage from "../assets/resolute-solutions-high-resolution-logo-transparent-2.png";

const Logo = ({
  size = "medium",
  showText = true,
  className = "",
  onClick,
}) => {
  const sizes = {
    small: "h-8 w-8 sm:h-10 sm:w-10", // Fixed square aspect ratio for perfect circles
    medium: "h-12 w-12 sm:h-16 sm:w-16", // Fixed square aspect ratio for perfect circles
    large: "h-16 w-16 sm:h-20 sm:w-20", // Fixed square aspect ratio for perfect circles
  };

  return (
    <div
      className={`flex items-center space-x-2 sm:space-x-3 group cursor-pointer hover:opacity-80 transition-all duration-300 ${className}`}
      onClick={onClick}
      title="Click to scroll to top"
    >
      <div className="relative">
        {/* Blurred Accent Glow Behind Logo */}
        <div
          className={`absolute inset-0 z-0 pointer-events-none ${sizes[size]} flex items-center justify-center`}
          aria-hidden="true"
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-300 via-purple-200 to-white opacity-60 blur-2xl rounded-full"></div>
        </div>
        {/* Primary logo - PNG for perfect compatibility */}
        <img
          src={logoImage}
          alt="Resolute Solutions Logo"
          className={`relative z-10 ${sizes[size]} object-cover rounded-full border-2 border-blue-200 shadow-md transform group-hover:scale-105 group-active:scale-95 transition-all duration-300 group-hover:shadow-lg group-hover:border-blue-300`}
          onError={(e) => {
            // Fallback to text logo if image fails
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback RS logo if image fails to load */}
        <div
          className={`relative z-10 ${sizes[size]} bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-105 group-active:scale-95 transition-all duration-300 border-2 border-white group-hover:shadow-xl`}
          style={{ display: "none" }}
        >
          <span className="text-white font-bold tracking-tight text-sm sm:text-lg lg:text-xl">
            RS
          </span>
        </div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={`text-base sm:text-xl font-bold transition-all duration-300 leading-tight group-active:scale-95 ${
              className.includes("text-white")
                ? "text-white group-hover:text-blue-200"
                : "text-slate-900 group-hover:text-blue-700"
            }`}
          >
            <span className="hidden xs:inline">Resolute Solutions</span>
            <span className="xs:hidden">Resolute</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
