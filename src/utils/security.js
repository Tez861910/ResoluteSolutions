/**
 * Security utilities for enhanced frontend protection
 * Note: These are deterrents, not absolute security measures
 */

class SecurityManager {
  constructor() {
    this.isDevToolsOpen = false;
    this.debuggerDetected = false;
    this.init();
  }

  init() {
    if (import.meta.env.PROD) {
      this.detectDevTools();
      this.preventContextMenu();
      this.preventKeyboardShortcuts();
      this.preventTextSelection();
      this.obscureConsole();
      this.detectDebugger();
      this.preventFraming();
    }
  }

  // Detect if DevTools is open
  detectDevTools() {
    const threshold = 160;

    setInterval(() => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!this.isDevToolsOpen) {
          this.isDevToolsOpen = true;
          this.handleDevToolsDetected();
        }
      } else {
        this.isDevToolsOpen = false;
      }
    }, 500);

    // Alternative detection method
    let devtools = {
      open: false,
      orientation: null,
    };

    const threshold2 = 160;

    setInterval(() => {
      if (
        window.outerHeight - window.innerHeight > threshold2 ||
        window.outerWidth - window.innerWidth > threshold2
      ) {
        if (!devtools.open) {
          devtools.open = true;
          devtools.orientation =
            window.outerHeight - window.innerHeight > threshold2
              ? "vertical"
              : "horizontal";
          this.handleDevToolsDetected();
        }
      } else {
        devtools.open = false;
      }
    }, 500);
  }

  // Handle DevTools detection
  handleDevToolsDetected() {
    console.clear();
    console.log("%cStop!", "color: red; font-size: 50px; font-weight: bold;");
    console.log(
      "%cThis is a browser feature intended for developers. Unauthorized access or manipulation of this website is prohibited.",
      "color: red; font-size: 16px;"
    );

    // Optional: Redirect or take action
    // window.location.href = 'about:blank';
  }

  // Prevent right-click context menu
  preventContextMenu() {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      return false;
    });
  }

  // Prevent common keyboard shortcuts
  preventKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U") ||
        (e.ctrlKey && e.shiftKey && e.key === "C") ||
        (e.ctrlKey && e.shiftKey && e.key === "K") ||
        (e.metaKey && e.altKey && e.key === "I") // Mac
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    });
  }

  // Prevent text selection
  preventTextSelection() {
    document.addEventListener("selectstart", (e) => {
      e.preventDefault();
      return false;
    });

    document.addEventListener("dragstart", (e) => {
      e.preventDefault();
      return false;
    });
  }

  // Obscure console with fake messages
  obscureConsole() {
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    console.log = function (...args) {
      if (import.meta.env.DEV) {
        originalLog.apply(console, args);
      }
    };

    console.warn = function (...args) {
      if (import.meta.env.DEV) {
        originalWarn.apply(console, args);
      }
    };

    console.error = function (...args) {
      if (import.meta.env.DEV) {
        originalError.apply(console, args);
      }
    };
  }

  // Detect debugger attempts
  detectDebugger() {
    setInterval(() => {
      const start = new Date();
      /* eslint-disable-next-line no-debugger */
      debugger; // This will pause if debugger is open
      const end = new Date();

      if (end - start > 100) {
        if (!this.debuggerDetected) {
          this.debuggerDetected = true;
          this.handleDebuggerDetected();
        }
      }
    }, 1000);
  }

  // Handle debugger detection
  handleDebuggerDetected() {
    console.clear();
    console.log("%cDebugger detected!", "color: red; font-size: 30px;");
    // Optional: Take action
    // window.location.href = 'about:blank';
  }

  // Prevent the page from being loaded in an iframe
  // Enhanced frame-busting protection
  preventFraming() {
    // Multiple frame-busting techniques for better protection

    // Method 1: Basic frame busting
    if (window.top !== window.self) {
      window.top.location = window.self.location;
    }

    // Method 2: Check for parent frames
    try {
      if (window.parent && window.parent !== window) {
        window.parent.location = window.location;
      }
    } catch {
      // If we can't access parent, we might be in a cross-origin frame
      window.location.reload();
    }

    // Method 3: Defensive frame busting
    if (
      document.getElementsByTagName("frame").length > 0 ||
      document.getElementsByTagName("iframe").length > 0
    ) {
      console.warn("Potential frame injection detected");
    }

    // Method 4: Monitor for frame changes
    setInterval(() => {
      if (window.top !== window.self) {
        try {
          window.top.location = window.self.location;
        } catch {
          window.location.reload();
        }
      }
    }, 1000);
  }

  // Add fake properties to confuse scrapers
  addDecoyProperties() {
    // Add fake API endpoints
    window.fakeAPI = {
      endpoint: "https://fake-api.example.com",
      key: "fake-key-12345",
      secret: "fake-secret-67890",
    };

    // Add fake configuration
    window.appConfig = {
      version: "0.0.1",
      environment: "development",
      debug: true,
    };
  }

  // Disable common debugging tools
  disableDebugging() {
    // Override console methods in production
    if (import.meta.env.PROD) {
      Object.defineProperty(window, "console", {
        value: {
          log: () => {},
          warn: () => {},
          error: () => {},
          info: () => {},
          debug: () => {},
          clear: () => {},
          dir: () => {},
          dirxml: () => {},
          table: () => {},
          trace: () => {},
          group: () => {},
          groupCollapsed: () => {},
          groupEnd: () => {},
          time: () => {},
          timeEnd: () => {},
          timeLog: () => {},
          count: () => {},
          countReset: () => {},
          assert: () => {},
          profile: () => {},
          profileEnd: () => {},
        },
        writable: false,
        configurable: false,
      });
    }
  }
}

// Initialize security manager
const securityManager = new SecurityManager();

export default securityManager;
