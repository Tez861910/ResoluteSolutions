import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({
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

  // Color scheme configurations
  const colorSchemes = {
    "blue-purple": {
      gradient: "from-blue-600 to-purple-600",
      hoverGradient: "hover:from-blue-700 hover:to-purple-700",
      focusRing: "focus:ring-blue-500",
      accent: "text-blue-600",
      bg: "bg-gradient-to-br from-blue-50 to-purple-50",
      border: "border-blue-200",
    },
    "yellow-red": {
      gradient: "from-yellow-500 to-red-500",
      hoverGradient: "hover:from-yellow-600 hover:to-red-600",
      focusRing: "focus:ring-yellow-500",
      accent: "text-yellow-600",
      bg: "bg-gradient-to-br from-yellow-50 to-red-50",
      border: "border-yellow-200",
    },
    "emerald-cyan": {
      gradient: "from-emerald-500 to-cyan-500",
      hoverGradient: "hover:from-emerald-600 hover:to-cyan-600",
      focusRing: "focus:ring-emerald-500",
      accent: "text-emerald-600",
      bg: "bg-gradient-to-br from-emerald-50 to-cyan-50",
      border: "border-emerald-200",
    },
    "orange-pink": {
      gradient: "from-orange-500 to-pink-500",
      hoverGradient: "hover:from-orange-600 hover:to-pink-600",
      focusRing: "focus:ring-orange-500",
      accent: "text-orange-600",
      bg: "bg-gradient-to-br from-orange-50 to-pink-50",
      border: "border-orange-200",
    },
  };

  const colors = colorSchemes[colorScheme];

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

  // Clear memory on component unmount
  useEffect(() => {
    return () => {
      // Cleanup function - runs when component unmounts
      clearFormMemory();
    };
  }, []);

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
        setSubmitStatus("error");
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

      console.log("✅ Form submitted successfully! Local memory cleared.");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceInterest: serviceType,
        message: "",
        referralSource: "",
      });

      // Show success notification and auto-hide after 5 seconds
      setTimeout(() => {
        setSubmitStatus("");
      }, 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-24 ${colors.bg}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div
          className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 border ${colors.border}`}
        >
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
                    🎉 Message Sent Successfully!
                    <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                  </h3>
                  <p className="text-green-700 font-medium mb-3">
                    Thank you for contacting <strong>Resolute Solutions</strong>
                    ! Your inquiry has been received and we'll respond within 24
                    hours.
                  </p>
                  <div className="text-sm text-green-600 space-y-1">
                    <p>✅ Form data submitted and validated</p>
                    <p>✅ Email notification sent to our team</p>
                    <p>✅ Local application memory cleared</p>
                    <p>✅ Form reset and ready for new inquiries</p>
                    <div className="mt-3 p-3 bg-green-100 rounded-lg">
                      <p className="font-semibold text-green-800">
                        💡 Your submission is complete! You can safely navigate
                        away from this page.
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        This notification will auto-hide in 5 seconds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                    Sorry, there was an error sending your message. Please try
                    again or contact us directly at
                    resolutesolutions@hotmail.com
                  </p>
                </div>
              </div>
            </div>
          )}

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
                <option value="referral">Referral from friend/colleague</option>
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

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">Prefer to reach out directly?</p>
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
  );
};

export default ContactForm;
