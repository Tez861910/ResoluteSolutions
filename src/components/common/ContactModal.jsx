import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactModal = ({
  isOpen,
  onClose,
  title = "Get In Touch",
  subtitle = "Let's discuss how we can help transform your business",
  serviceType = "General Inquiry",
  colorScheme = "blue-purple", // blue-purple, yellow-red, emerald-cyan, orange-pink
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: serviceType,
    message: "",
    referralSource: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Color scheme configurations
  const colorSchemes = {
    "blue-purple": {
      gradient: "from-blue-600 to-purple-600",
      hoverGradient: "hover:from-blue-700 hover:to-purple-700",
      focusRing: "focus:ring-blue-500",
      accent: "text-blue-600",
      border: "border-blue-200",
      lightBg: "bg-blue-50",
      darkAccent: "text-blue-800",
      bg: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    "yellow-red": {
      gradient: "from-yellow-500 to-red-500",
      hoverGradient: "hover:from-yellow-600 hover:to-red-600",
      focusRing: "focus:ring-yellow-500",
      accent: "text-yellow-600",
      border: "border-yellow-200",
      lightBg: "bg-yellow-50",
      darkAccent: "text-yellow-800",
      bg: "bg-gradient-to-br from-yellow-50 to-red-50",
    },
    "emerald-cyan": {
      gradient: "from-emerald-500 to-cyan-500",
      hoverGradient: "hover:from-emerald-600 hover:to-cyan-600",
      focusRing: "focus:ring-emerald-500",
      accent: "text-emerald-600",
      border: "border-emerald-200",
      lightBg: "bg-emerald-50",
      darkAccent: "text-emerald-800",
      bg: "bg-gradient-to-br from-emerald-50 to-cyan-50",
    },
    "orange-pink": {
      gradient: "from-orange-500 to-pink-500",
      hoverGradient: "hover:from-orange-600 hover:to-pink-600",
      focusRing: "focus:ring-orange-500",
      accent: "text-orange-600",
      border: "border-orange-200",
      lightBg: "bg-orange-50",
      darkAccent: "text-orange-800",
      bg: "bg-gradient-to-br from-orange-50 to-pink-50",
    },
  };

  const colors = colorSchemes[colorScheme];

  // Helper function to get frosted glass color values based on color scheme
  const getColorValues = (scheme) => {
    switch (scheme) {
      case "blue-purple":
        return {
          primary: "rgba(219, 234, 254, 0.95)", // blue-100 with transparency
          secondary: "rgba(237, 233, 254, 0.90)", // purple-100 with transparency
        };
      case "yellow-red":
        return {
          primary: "rgba(254, 249, 195, 0.95)", // yellow-100 with transparency
          secondary: "rgba(254, 226, 226, 0.90)", // red-100 with transparency
        };
      case "emerald-cyan":
        return {
          primary: "rgba(209, 250, 229, 0.95)", // emerald-100 with transparency
          secondary: "rgba(207, 250, 254, 0.90)", // cyan-100 with transparency
        };
      case "orange-pink":
        return {
          primary: "rgba(255, 237, 213, 0.95)", // orange-100 with transparency
          secondary: "rgba(252, 231, 243, 0.90)", // pink-100 with transparency
        };
      default:
        return {
          primary: "rgba(219, 234, 254, 0.95)", // blue-100 default
          secondary: "rgba(237, 233, 254, 0.90)", // purple-100 default
        };
    }
  };

  // Function to clear all form-related memory
  const clearFormMemory = () => {
    try {
      // Clear localStorage items related to forms
      const keysToRemove = [
        "contactFormDraft",
        "tempFormData",
        "formCache",
        "contactForm",
        "formData",
        "draftData",
      ];

      keysToRemove.forEach((key) => {
        localStorage.removeItem(key);
      });

      // Clear sessionStorage items related to forms
      keysToRemove.forEach((key) => {
        sessionStorage.removeItem(key);
      });

      // Clear any form-related caches
      if ("caches" in window) {
        caches.keys().then((names) => {
          names.forEach((name) => {
            if (name.includes("form") || name.includes("contact")) {
              caches.delete(name);
            }
          });
        });
      }
    } catch (error) {
      console.error("Error clearing form memory:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // EmailJS configuration using environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        setIsSubmitting(false);
        alert(
          "Our contact form is temporarily unavailable. Please email us directly at resolutesolutions@hotmail.com or try again later.\n\n" +
            "For immediate assistance, you can also reach out through our social media channels."
        );
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_interest: formData.serviceInterest,
        message: formData.message,
        referral_source: formData.referralSource || "Not specified",
        to_email:
          import.meta.env.VITE_CONTACT_EMAIL || "resolutesolutions@hotmail.com",
        website_url:
          import.meta.env.VITE_WEBSITE_URL ||
          "https://resolutesolutions.github.io",
        current_time: new Date().toLocaleString(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Clear all form-related memory
      clearFormMemory();

      console.log("âœ… Form submitted successfully! Local memory cleared.");

      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceInterest: serviceType,
        message: "",
        referralSource: "",
      });

      // Auto-close modal after successful submission
      setTimeout(() => {
        onClose();
        setSubmitStatus("");
      }, 3000);
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Focus management
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Clear memory on component unmount
  useEffect(() => {
    return () => {
      // Cleanup function - runs when component unmounts
      clearFormMemory();
    };
  }, []);

  // Keyboard event handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`backdrop-blur-xl border-2 ${colors.border} rounded-3xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out scale-100 opacity-100`}
        style={{
          background: `linear-gradient(135deg, ${
            getColorValues(colorScheme).primary
          } 0%, ${
            getColorValues(colorScheme).secondary
          } 50%, rgba(255, 255, 255, 0.85) 100%)`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          willChange: "transform, opacity",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Content with Original Form Styling */}
        <section className={`py-12 ${colors.bg}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-between items-start mb-8">
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    {title}
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    {subtitle}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-600 transition-colors ml-4"
                >
                  <svg
                    className="w-8 h-8"
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
                </button>
              </div>
            </div>

            {/* Form with Original ContactForm Styling */}
            <div
              className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 border ${colors.border}`}
            >
              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full animate-bounce">
                        <svg
                          className="h-7 w-7 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                        ðŸŽ‰ Message Sent Successfully!
                        <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                      </h3>
                      <p className="text-green-700 font-medium mb-3">
                        Thank you for contacting{" "}
                        <strong>Resolute Solutions</strong>! Your inquiry has
                        been received and we'll respond within 24 hours.
                      </p>
                      <div className="text-sm text-green-600 space-y-1">
                        <p>âœ… Form data submitted and validated</p>
                        <p>âœ… Email notification sent to our team</p>
                        <p>âœ… Local application memory cleared</p>
                        <p>âœ… Form reset and ready for new inquiries</p>
                        <div className="mt-3 p-3 bg-green-100 rounded-lg">
                          <p className="font-semibold text-green-800">
                            ðŸ’¡ Your submission is complete! Modal will close
                            automatically.
                          </p>
                          <p className="text-xs text-green-600 mt-1">
                            This notification will auto-hide in 3 seconds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-red-800 font-medium">
                        Sorry, there was an error sending your message. Please
                        try again or contact us directly at
                        resolutesolutions@hotmail.com
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      ref={firstInputRef}
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="referralSource"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    How did you hear about us?
                  </label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                  >
                    <option value="">Please select</option>
                    <option value="google-search">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">
                      Referral from friend/colleague
                    </option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="business-network">Business Network</option>
                    <option value="trade-show">Trade Show/Event</option>
                    <option value="website">Company Website</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200 resize-none`}
                    placeholder="Please describe your requirements, challenges you're facing, and how we can help you achieve your goals..."
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r ${colors.gradient} ${colors.hoverGradient} text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                <p className="text-slate-600 mb-4">
                  Prefer to reach out directly?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:resolutesolutions@hotmail.com"
                    className={`inline-flex items-center ${colors.accent} hover:underline font-medium`}
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 7.89a2 2 0 002.82 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    resolutesolutions@hotmail.com
                  </a>
                  <a
                    href="tel:+918073570073"
                    className={`inline-flex items-center ${colors.accent} hover:underline font-medium`}
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +91 80735 70073
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactModal;
