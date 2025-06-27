// Logo component that uses the actual brand logo
import logoImage from "../assets/resolute-solutions-high-resolution-logo-transparent-2.png";

const Logo = ({ size = "medium", showText = true, className = "" }) => {
  const sizes = {
    small: "h-8 w-8 sm:h-10 sm:w-10", // Fixed square aspect ratio for perfect circles
    medium: "h-12 w-12 sm:h-16 sm:w-16", // Fixed square aspect ratio for perfect circles
    large: "h-16 w-16 sm:h-20 sm:w-20", // Fixed square aspect ratio for perfect circles
  };

  return (
    <div
      className={`flex items-center space-x-2 sm:space-x-3 group ${className}`}
    >
      <div className="relative">
        {/* Primary logo - PNG for perfect compatibility */}
        <img
          src={logoImage}
          alt="Resolute Solutions Logo"
          className={`${sizes[size]} object-cover rounded-full border-2 border-blue-200 shadow-md transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:border-blue-300`}
          onError={(e) => {
            // Fallback to text logo if image fails
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback RS logo if image fails to load */}
        <div
          className={`${sizes[size]} bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300 border-2 border-white group-hover:shadow-xl`}
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
            className={`text-base sm:text-xl font-bold transition-colors leading-tight ${
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
