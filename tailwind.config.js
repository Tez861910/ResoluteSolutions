/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Enhanced breakpoints for all device types
      screens: {
        xs: "475px", // Small phones
        sm: "640px", // Large phones
        md: "768px", // Tablets
        lg: "1024px", // Small laptops
        xl: "1280px", // Large laptops/desktops
        "2xl": "1536px", // Large desktops
        // Foldable phone support
        fold: "280px", // Galaxy Fold (closed)
        "fold-open": "717px", // Galaxy Fold (open)
        // Tablet-specific breakpoints
        "tablet-sm": "768px",
        "tablet-lg": "1024px",
      },
      // Safe areas for notched devices
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      // Enhanced font sizes for readability
      fontSize: {
        "xs-mobile": ["0.75rem", { lineHeight: "1rem" }],
        "sm-mobile": ["0.875rem", { lineHeight: "1.25rem" }],
        "base-mobile": ["1rem", { lineHeight: "1.5rem" }],
      },
      // Touch-friendly sizing
      minHeight: {
        touch: "44px", // Minimum touch target size
      },
      minWidth: {
        touch: "44px",
      },
    },
  },
  plugins: [],
};
