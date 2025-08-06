import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactModal = ({
  isOpen,
  onClose,
  title = "Get In Touch",
  subtitle = "Let's discuss how we can help transform your business",
  serviceType = "General Inquiry",
  colorScheme = "blue-purple",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: serviceType,
    message: "",
    jobTitle: "",
    industry: "",
    referralSource: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Simplified color schemes - pre-computed for performance
  const colorStyles = {
    "blue-purple": {
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600",
      hoverGradient: "hover:from-blue-700 hover:to-purple-700",
      focusRing: "focus:ring-blue-500",
      accent: "text-blue-600",
      border: "border-blue-200",
      bg: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    "yellow-red": {
      gradient: "bg-gradient-to-r from-yellow-500 to-red-500",
      hoverGradient: "hover:from-yellow-600 hover:to-red-600",
      focusRing: "focus:ring-yellow-500",
      accent: "text-yellow-600",
      border: "border-yellow-200",
      bg: "bg-gradient-to-br from-yellow-50 to-red-50",
    },
    "emerald-cyan": {
      gradient: "bg-gradient-to-r from-emerald-500 to-cyan-500",
      hoverGradient: "hover:from-emerald-600 hover:to-cyan-600",
      focusRing: "focus:ring-emerald-500",
      accent: "text-emerald-600",
      border: "border-emerald-200",
      bg: "bg-gradient-to-br from-emerald-50 to-cyan-50",
    },
    "orange-pink": {
      gradient: "bg-gradient-to-r from-orange-500 to-pink-500",
      hoverGradient: "hover:from-orange-600 hover:to-pink-600",
      focusRing: "focus:ring-orange-500",
      accent: "text-orange-600",
      border: "border-orange-200",
      bg: "bg-gradient-to-br from-orange-50 to-pink-50",
    },
  };

  const colors = colorStyles[colorScheme] || colorStyles["blue-purple"];

  const industryOptions = [
    "Manufacturing",
    "Food & Beverage",
    "Pharmaceuticals",
    "Healthcare",
    "Hospitality",
    "Education",
    "Retail",
    "Agriculture",
    "Automotive",
    "Chemicals",
    "Other",
  ];

  const referralSources = [
    "Google Search",
    "Social Media",
    "Referral",
    "Trade Show",
    "Industry Publication",
    "Direct Contact",
    "Other",
  ];

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceInterest: serviceType,
      message: "",
      jobTitle: "",
      industry: "",
      referralSource: "",
    });
    setSubmitStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_interest: formData.serviceInterest,
        message: formData.message,
        job_title: formData.jobTitle || "Not specified",
        industry: formData.industry || "Not specified",
        referral_source: formData.referralSource || "Not specified",
        to_email: "resolutesolutions.connect@gmail.com",
      };

      await emailjs.send(
        "service_contact_form",
        "template_contact",
        templateParams,
        "fX51_pA7lXoAeN9qp"
      );

      setSubmitStatus("success");
      resetForm();
      setTimeout(() => {
        onClose();
        setSubmitStatus("");
      }, 2000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Single useEffect for all side effects
  useEffect(() => {
    if (!isOpen) return;

    // Focus management
    const focusTimer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    // Keyboard handling
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    // Prevent body scroll
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`${colors.bg} border-2 ${colors.border} rounded-3xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300`}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
              <p className="text-gray-600 text-lg">{subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              ×
            </button>
          </div>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-green-800 font-semibold">
                ✅ Thank you! Your message has been sent successfully.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-800 font-semibold">
                ❌ Failed to send message. Please try again.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Required Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focusRing} focus:border-transparent focus:outline-none transition-colors`}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focusRing} focus:border-transparent focus:outline-none transition-colors`}
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focusRing} focus:border-transparent focus:outline-none transition-colors`}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focusRing} focus:border-transparent focus:outline-none transition-colors`}
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Optional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focusRing} focus:border-transparent focus:outline-none transition-colors`}
                  placeholder="Your position"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focusRing} focus:border-transparent focus:outline-none transition-colors`}
                >
                  <option value="">Select industry</option>
                  {industryOptions.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focusRing} focus:border-transparent focus:outline-none transition-colors`}
                >
                  <option value="">Select source</option>
                  {referralSources.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${colors.focusRing} focus:border-transparent focus:outline-none transition-colors resize-none`}
                placeholder="Tell us about your requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 ${colors.gradient} ${colors.hoverGradient} text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
