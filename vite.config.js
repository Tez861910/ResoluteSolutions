import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === "serve";
  const isProd = command === "build";

  return {
    plugins: [
      react({
        // Enable Fast Refresh for better development experience
        fastRefresh: true,
        // Include additional JSX runtime optimizations
        jsxRuntime: "automatic",
      }),
    ],

    // Path resolution for cleaner imports
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
        "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
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
      sourcemap: true,

      // Modern browser targets for optimal performance
      target: [
        "es2020",
        "edge88",
        "firefox78",
        "chrome87",
        "safari14",
        "ios12",
      ],

      // Build optimization
      minify: "esbuild",
      cssMinify: true,
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1000,

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

    // Environment variables
    define: {
      __DEV__: JSON.stringify(isDev),
      __PROD__: JSON.stringify(isProd),
      __APP_VERSION__: JSON.stringify("1.0.0"),
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
