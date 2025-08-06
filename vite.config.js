import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = command === "serve";
  const isProd = command === "build";

  // Load environment variables with VITE_ prefix
  const env = loadEnv(mode, resolve(), "VITE_");

  console.log("🔧 Vite Config Debug:");
  console.log("Mode:", mode);
  console.log("Command:", command);
  console.log("Is Production:", isProd);
  console.log("Environment variables loaded:", Object.keys(env));

  if (isProd) {
    console.log("🚀 Production build - checking for EmailJS configuration:");
    console.log(
      "  Service ID:",
      env.VITE_EMAILJS_SERVICE_ID ? "✅ Found" : "❌ Missing"
    );
    console.log(
      "  Template ID:",
      env.VITE_EMAILJS_TEMPLATE_ID ? "✅ Found" : "❌ Missing"
    );
    console.log(
      "  Public Key:",
      env.VITE_EMAILJS_PUBLIC_KEY ? "✅ Found" : "❌ Missing"
    );

    if (
      !env.VITE_EMAILJS_SERVICE_ID ||
      !env.VITE_EMAILJS_TEMPLATE_ID ||
      !env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      console.warn(
        "⚠️  EmailJS configuration missing - contact forms will show fallback message"
      );
    }
  }

  return {
    plugins: [
      react({
        // Enable Fast Refresh for better development experience
        fastRefresh: true,
        // Include additional JSX runtime optimizations
        jsxRuntime: "automatic",
      }),
    ],

    // Define environment variables and constants
    define: {
      __DEV__: JSON.stringify(isDev),
      __PROD__: JSON.stringify(isProd),
      __APP_VERSION__: JSON.stringify("1.0.0"),
      // Inject EmailJS environment variables for production
      ...(isProd && {
        "import.meta.env.VITE_EMAILJS_SERVICE_ID": JSON.stringify(
          env.VITE_EMAILJS_SERVICE_ID || ""
        ),
        "import.meta.env.VITE_EMAILJS_TEMPLATE_ID": JSON.stringify(
          env.VITE_EMAILJS_TEMPLATE_ID || ""
        ),
        "import.meta.env.VITE_EMAILJS_PUBLIC_KEY": JSON.stringify(
          env.VITE_EMAILJS_PUBLIC_KEY || ""
        ),
        "import.meta.env.VITE_CONTACT_EMAIL": JSON.stringify(
          env.VITE_CONTACT_EMAIL || "resolutesolutions@hotmail.com"
        ),
        "import.meta.env.VITE_WEBSITE_URL": JSON.stringify(
          env.VITE_WEBSITE_URL || "https://resolutesolutions.github.io"
        ),
      }),
    },

    // Path resolution for cleaner imports
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
        "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
    },

    // Development server configuration
    server: {
      port: 5173,
      open: true,
      host: true, // Listen on all network interfaces
      strictPort: false,
      cors: true, // Enable CORS for API calls during development

      // Enhanced HMR (Hot Module Replacement)
      hmr: {
        overlay: true,
        port: 5173,
        timeout: 30000, // Increase timeout for slower connections
        clientPort: undefined, // Auto-detect client port
      },

      // File watching configuration
      watch: {
        usePolling: true,
        interval: 100,
        ignored: ["**/node_modules/**", "**/.git/**", "**/dist/**"],
      },

      // Proxy configuration for API calls (if needed)
      proxy: {
        // Example: '/api': 'http://localhost:3000'
      },
    },

    // Production build configuration
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false, // Disable source maps for production security

      // Modern browser targets for optimal performance
      target: [
        "es2020",
        "edge88",
        "firefox78",
        "chrome87",
        "safari14",
        "ios12",
      ],

      // Enhanced build optimization with Terser
      minify: "terser",
      cssMinify: true,
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1000,

      // Terser options for enhanced obfuscation
      terserOptions: {
        compress: {
          drop_console: true, // Remove all console.log statements
          drop_debugger: true, // Remove debugger statements
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'], // Remove specific console methods
          passes: 3, // Multiple compression passes
        },
        mangle: {
          toplevel: true, // Mangle top-level variable names
          safari10: true, // Ensure Safari 10 compatibility
        },
        format: {
          comments: false, // Remove all comments
        },
      },

      // Advanced bundling configuration
      rollupOptions: {
        output: {
          // Code splitting for better caching
          manualChunks: {
            // Vendor chunk for third-party libraries
            vendor: ["react", "react-dom"],
            // Router chunk for routing logic
            router: ["react-router-dom"],
            // Utils chunk for utility functions (add as needed)
            // utils: ['lodash', 'axios'],
          },

          // Asset naming for better caching
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split(".");
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            if (/woff2?|eot|ttf|otf/i.test(ext)) {
              return `assets/fonts/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },

          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
        },
      },
    },

    // CSS configuration
    css: {
      devSourcemap: true,
      modules: {
        localsConvention: "camelCaseOnly",
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
        },
      },
    },

    // Dependency optimization
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
      exclude: [
        // Exclude any problematic dependencies
      ],
      force: false, // Set to true to force re-optimization
    },

    // Preview server (for production build testing)
    preview: {
      port: 4173,
      host: true, // Listen on all network interfaces
      open: true,
      cors: true,
      strictPort: false,
    },

    // Public directory configuration
    publicDir: "public",

    // Base URL configuration (useful for deployment)
    base: isProd ? "/ResoluteSolutions/" : "/",

    // Asset processing
    assetsInclude: ["**/*.woff", "**/*.woff2"],

    // Logging configuration
    logLevel: "info",
    clearScreen: true,

    // Worker configuration for web workers (if needed)
    worker: {
      format: "es",
      plugins: () => [],
    },
  };
});
