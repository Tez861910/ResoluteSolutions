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
    jobTitle: "",
    industry: "",
    companySize: "",
    serviceInterest: serviceType,
    projectType: "",
    budgetRange: "",
    timeline: "",
    urgency: "",
    currentChallenges: "",
    expectedOutcomes: "",
    message: "",
    hasWorkedWithConsultants: "",
    referralSource: "",
    preferredContactMethod: "email",
    bestContactTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
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
    },
    "yellow-red": {
      gradient: "from-yellow-500 to-red-500",
      hoverGradient: "hover:from-yellow-600 hover:to-red-600",
      focusRing: "focus:ring-yellow-500",
      accent: "text-yellow-600",
      border: "border-yellow-200",
      lightBg: "bg-yellow-50",
      darkAccent: "text-yellow-800",
    },
    "emerald-cyan": {
      gradient: "from-emerald-500 to-cyan-500",
      hoverGradient: "hover:from-emerald-600 hover:to-cyan-600",
      focusRing: "focus:ring-emerald-500",
      accent: "text-emerald-600",
      border: "border-emerald-200",
      lightBg: "bg-emerald-50",
      darkAccent: "text-emerald-800",
    },
    "orange-pink": {
      gradient: "from-orange-500 to-pink-500",
      hoverGradient: "hover:from-orange-600 hover:to-pink-600",
      focusRing: "focus:ring-orange-500",
      accent: "text-orange-600",
      border: "border-orange-200",
      lightBg: "bg-orange-50",
      darkAccent: "text-orange-800",
    },
  };

  const colors = colorSchemes[colorScheme];

  // Form validation
  const validateField = (name, value) => {
    const errors = {};

    switch (name) {
      case "name":
        if (!value.trim()) errors.name = "Name is required";
        else if (value.trim().length < 2)
          errors.name = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) errors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          errors.email = "Please enter a valid email";
        break;
      case "phone":
        if (value && !/^[+]?[0-9\s\-()]{10,}$/.test(value))
          errors.phone = "Please enter a valid phone number";
        break;
      case "company":
        if (!value.trim()) errors.company = "Company name is required";
        break;
      case "jobTitle":
        if (!value.trim()) errors.jobTitle = "Job title is required";
        break;
      case "currentChallenges":
        if (!value.trim())
          errors.currentChallenges = "Please describe your current challenges";
        else if (value.trim().length < 20)
          errors.currentChallenges =
            "Please provide more details (at least 20 characters)";
        break;
      case "expectedOutcomes":
        if (!value.trim())
          errors.expectedOutcomes = "Please describe your expected outcomes";
        else if (value.trim().length < 20)
          errors.expectedOutcomes =
            "Please provide more details (at least 20 characters)";
        break;
      case "message":
        if (!value.trim())
          errors.message = "Additional information is required";
        else if (value.trim().length < 10)
          errors.message =
            "Please provide more details (at least 10 characters)";
        break;
      default:
        break;
    }

    return errors;
  };

  // Real-time validation
  const handleFieldBlur = (e) => {
    const { name, value } = e.target;
    const errors = validateField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      ...errors,
      ...(Object.keys(errors).length === 0 && { [name]: undefined }),
    }));
  };

  // Auto-save draft to localStorage
  useEffect(() => {
    if (isOpen) {
      const savedDraft = localStorage.getItem("contactFormDraft");
      if (savedDraft) {
        try {
          const draft = JSON.parse(savedDraft);
          setFormData((prev) => ({
            ...prev,
            ...draft,
            serviceInterest: serviceType,
          }));
        } catch (error) {
          console.error("Error loading draft:", error);
        }
      }
    }
  }, [isOpen, serviceType]);

  // Save draft to localStorage when form data changes
  useEffect(() => {
    if (isOpen && (formData.name || formData.email || formData.message)) {
      const draftData = { ...formData };
      delete draftData.serviceInterest; // Don't save service interest
      localStorage.setItem("contactFormDraft", JSON.stringify(draftData));
    }
  }, [formData, isOpen]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, serviceInterest: serviceType }));
      setSubmitStatus("");
      setFieldErrors({});
      setCurrentStep(1);

      // Focus first input after animation
      setTimeout(() => {
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        }
      }, 300);
    }
  }, [isOpen, serviceType]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Validate all required fields
    const requiredFields = [
      "name",
      "email",
      "company",
      "jobTitle",
      "currentChallenges",
      "expectedOutcomes",
      "message",
    ];
    let hasErrors = false;
    const errors = {};

    requiredFields.forEach((field) => {
      const fieldErrors = validateField(field, formData[field]);
      if (Object.keys(fieldErrors).length > 0) {
        Object.assign(errors, fieldErrors);
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration using environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        console.error(
          "EmailJS configuration missing. Please check your .env file."
        );
        throw new Error("Email service not configured");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company,
        job_title: formData.jobTitle,
        industry: formData.industry || "Not specified",
        company_size: formData.companySize || "Not specified",
        service_interest: formData.serviceInterest,
        project_type: formData.projectType || "Not specified",
        budget_range: formData.budgetRange || "Not specified",
        timeline: formData.timeline || "Not specified",
        urgency: formData.urgency || "Not specified",
        current_challenges: formData.currentChallenges,
        expected_outcomes: formData.expectedOutcomes,
        message: formData.message,
        worked_with_consultants:
          formData.hasWorkedWithConsultants || "Not specified",
        referral_source: formData.referralSource || "Not specified",
        preferred_contact_method: formData.preferredContactMethod,
        best_contact_time: formData.bestContactTime || "Not specified",
        to_email:
          import.meta.env.VITE_CONTACT_EMAIL || "resolutesolutions@hotmail.com",
        website_url:
          import.meta.env.VITE_WEBSITE_URL ||
          "https://resolutesolutions.github.io",
        current_time: new Date().toLocaleString(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");

      // Clear saved draft
      localStorage.removeItem("contactFormDraft");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        industry: "",
        companySize: "",
        serviceInterest: serviceType,
        projectType: "",
        budgetRange: "",
        timeline: "",
        urgency: "",
        currentChallenges: "",
        expectedOutcomes: "",
        message: "",
        hasWorkedWithConsultants: "",
        referralSource: "",
        preferredContactMethod: "email",
        bestContactTime: "",
      });

      // Auto-close modal after successful submission
      setTimeout(() => {
        onClose();
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

  // Form progress calculation
  const getFormProgress = () => {
    const fields = [
      "name",
      "email",
      "company",
      "jobTitle",
      "currentChallenges",
      "expectedOutcomes",
      "message",
    ];
    const filledFields = fields.filter((field) =>
      formData[field]?.trim()
    ).length;
    return (filledFields / fields.length) * 100;
  };

  // Multi-step form navigation
  const canProceedToStep2 =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.company.trim() &&
    formData.jobTitle.trim() &&
    !fieldErrors.name &&
    !fieldErrors.email &&
    !fieldErrors.company &&
    !fieldErrors.jobTitle;
  const canSubmit =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.company.trim() &&
    formData.jobTitle.trim() &&
    formData.currentChallenges.trim() &&
    formData.expectedOutcomes.trim() &&
    formData.message.trim() &&
    Object.keys(fieldErrors).length === 0;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out"
        style={{ animation: isOpen ? "slideIn 0.3s ease-out" : "" }}
      >
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200 rounded-t-2xl overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-500 ease-out`}
            style={{ width: `${getFormProgress()}%` }}
          ></div>
        </div>

        {/* Modal Header */}
        <div
          className={`bg-gradient-to-r ${colors.gradient} text-white px-8 py-6 relative`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/90 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 7.89a2 2 0 002.82 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
              <div
                className={`inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium`}
              >
                {serviceType}
              </div>
            </div>
          </div>
          <p className="text-lg opacity-90">{subtitle}</p>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-white"
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
                <div className="ml-4">
                  <h3 className="text-green-800 font-bold text-lg">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for your inquiry. We'll review your requirements
                    and get back to you within 24 hours with next steps.
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-white"
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
                </div>
                <div className="ml-4">
                  <h3 className="text-red-800 font-bold text-lg">
                    Message Failed to Send
                  </h3>
                  <p className="text-red-700">
                    We're sorry, but there was an issue sending your message.
                    Please try again or contact us directly at{" "}
                    <a
                      href="mailto:resolutesolutions@hotmail.com"
                      className="underline font-medium hover:text-red-600 transition-colors"
                    >
                      resolutesolutions@hotmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div
                className={`flex items-center ${
                  currentStep >= 1 ? colors.accent : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    currentStep >= 1 ? colors.lightBg : "bg-gray-100"
                  }`}
                >
                  {currentStep > 1 ? "✓" : "1"}
                </div>
                <span className="ml-2 font-medium">Contact Info</span>
              </div>
              <div
                className={`w-12 h-0.5 ${
                  currentStep > 1
                    ? `bg-gradient-to-r ${colors.gradient}`
                    : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`flex items-center ${
                  currentStep >= 2 ? colors.accent : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    currentStep >= 2 ? colors.lightBg : "bg-gray-100"
                  }`}
                >
                  2
                </div>
                <span className="ml-2 font-medium">Project Details</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
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
                      onBlur={handleFieldBlur}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                        fieldErrors.name
                          ? "border-red-300 focus:ring-red-500"
                          : `border-slate-300 ${colors.focusRing} focus:border-transparent`
                      } focus:outline-none`}
                      placeholder="Your full name"
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {fieldErrors.name}
                      </p>
                    )}
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
                      onBlur={handleFieldBlur}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                        fieldErrors.email
                          ? "border-red-300 focus:ring-red-500"
                          : `border-slate-300 ${colors.focusRing} focus:border-transparent`
                      } focus:outline-none`}
                      placeholder="your.email@company.com"
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Phone Number
                      <span className="text-slate-500 font-normal ml-1">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleFieldBlur}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                        fieldErrors.phone
                          ? "border-red-300 focus:ring-red-500"
                          : `border-slate-300 ${colors.focusRing} focus:border-transparent`
                      } focus:outline-none`}
                      placeholder="+91 98765 43210"
                    />
                    {fieldErrors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {fieldErrors.phone}
                      </p>
                    )}
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
                      onBlur={handleFieldBlur}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                        fieldErrors.company
                          ? "border-red-300 focus:ring-red-500"
                          : `border-slate-300 ${colors.focusRing} focus:border-transparent`
                      } focus:outline-none`}
                      placeholder="Your company name"
                    />
                    {fieldErrors.company && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {fieldErrors.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="jobTitle"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                      onBlur={handleFieldBlur}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                        fieldErrors.jobTitle
                          ? "border-red-300 focus:ring-red-500"
                          : `border-slate-300 ${colors.focusRing} focus:border-transparent`
                      } focus:outline-none`}
                      placeholder="e.g., CEO, Operations Manager, Project Director"
                    />
                    {fieldErrors.jobTitle && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {fieldErrors.jobTitle}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                    >
                      <option value="">Select your industry</option>
                      <option value="technology">Technology & Software</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="healthcare">
                        Healthcare & Pharmaceuticals
                      </option>
                      <option value="finance">Finance & Banking</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="food-beverage">Food & Beverage</option>
                      <option value="automotive">Automotive</option>
                      <option value="construction">
                        Construction & Real Estate
                      </option>
                      <option value="energy">Energy & Utilities</option>
                      <option value="education">Education</option>
                      <option value="logistics">
                        Logistics & Supply Chain
                      </option>
                      <option value="consulting">Consulting Services</option>
                      <option value="government">
                        Government & Public Sector
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                    >
                      <option value="">Select company size</option>
                      <option value="startup">Startup (1-10 employees)</option>
                      <option value="small">
                        Small Business (11-50 employees)
                      </option>
                      <option value="medium">
                        Medium Business (51-200 employees)
                      </option>
                      <option value="large">
                        Large Enterprise (201-1000 employees)
                      </option>
                      <option value="enterprise">
                        Large Enterprise (1000+ employees)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="urgency"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                    >
                      <option value="">Select urgency level</option>
                      <option value="low">Low - Planning for future</option>
                      <option value="medium">
                        Medium - Within next quarter
                      </option>
                      <option value="high">High - Within next month</option>
                      <option value="critical">
                        Critical - Immediate action needed
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    disabled={!canProceedToStep2}
                    className={`px-8 py-3 rounded-xl font-bold transition-all duration-200 ${
                      canProceedToStep2
                        ? `bg-gradient-to-r ${colors.gradient} ${colors.hoverGradient} text-white hover:scale-105 shadow-lg`
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                    >
                      <option value="">Select project type</option>
                      <option value="consultation">Initial Consultation</option>
                      <option value="assessment">Risk Assessment</option>
                      <option value="optimization">Process Optimization</option>
                      <option value="implementation">
                        Full Implementation
                      </option>
                      <option value="ongoing">Ongoing Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">
                        Immediate (Within 1 month)
                      </option>
                      <option value="short">Short-term (1-3 months)</option>
                      <option value="medium">Medium-term (3-6 months)</option>
                      <option value="long">Long-term (6+ months)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Budget Range
                      <span className="text-slate-500 font-normal ml-1">
                        (Optional)
                      </span>
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1l">Under ₹1 Lakh</option>
                      <option value="1l-5l">₹1-5 Lakhs</option>
                      <option value="5l-10l">₹5-10 Lakhs</option>
                      <option value="10l-25l">₹10-25 Lakhs</option>
                      <option value="25l-50l">₹25-50 Lakhs</option>
                      <option value="50l+">₹50+ Lakhs</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="hasWorkedWithConsultants"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Previous Consulting Experience
                    </label>
                    <select
                      id="hasWorkedWithConsultants"
                      name="hasWorkedWithConsultants"
                      value={formData.hasWorkedWithConsultants}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                    >
                      <option value="">Select experience</option>
                      <option value="yes-positive">
                        Yes, with positive results
                      </option>
                      <option value="yes-mixed">Yes, with mixed results</option>
                      <option value="yes-negative">
                        Yes, but unsatisfactory
                      </option>
                      <option value="no">No, this is our first time</option>
                      <option value="internal">
                        We handle everything internally
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="preferredContactMethod"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContactMethod"
                      name="preferredContactMethod"
                      value={formData.preferredContactMethod}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="video">Video Conference</option>
                      <option value="in-person">In-Person Meeting</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="bestContactTime"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Best Contact Time
                    </label>
                    <select
                      id="bestContactTime"
                      name="bestContactTime"
                      value={formData.bestContactTime}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-slate-300 ${colors.focusRing} focus:border-transparent focus:outline-none transition-all duration-200`}
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">
                        Afternoon (12 PM - 5 PM)
                      </option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
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
                    <option value="">Select referral source</option>
                    <option value="google">Google Search</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="referral">Client Referral</option>
                    <option value="partner">Business Partner</option>
                    <option value="social-media">Social Media</option>
                    <option value="website">Company Website</option>
                    <option value="networking">Networking Event</option>
                    <option value="trade-show">Trade Show/Conference</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="currentChallenges"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Current Challenges *
                  </label>
                  <textarea
                    id="currentChallenges"
                    name="currentChallenges"
                    required
                    rows="4"
                    value={formData.currentChallenges}
                    onChange={handleChange}
                    onBlur={handleFieldBlur}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none ${
                      fieldErrors.currentChallenges
                        ? "border-red-300 focus:ring-red-500"
                        : `border-slate-300 ${colors.focusRing} focus:border-transparent`
                    } focus:outline-none`}
                    placeholder="Describe the specific challenges, pain points, or issues your organization is currently facing..."
                  ></textarea>
                  {fieldErrors.currentChallenges && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {fieldErrors.currentChallenges}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="expectedOutcomes"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Expected Outcomes *
                  </label>
                  <textarea
                    id="expectedOutcomes"
                    name="expectedOutcomes"
                    required
                    rows="4"
                    value={formData.expectedOutcomes}
                    onChange={handleChange}
                    onBlur={handleFieldBlur}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none ${
                      fieldErrors.expectedOutcomes
                        ? "border-red-300 focus:ring-red-500"
                        : `border-slate-300 ${colors.focusRing} focus:border-transparent`
                    } focus:outline-none`}
                    placeholder="What specific outcomes, improvements, or results do you hope to achieve through our partnership?"
                  ></textarea>
                  {fieldErrors.expectedOutcomes && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {fieldErrors.expectedOutcomes}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Additional Information *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleFieldBlur}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none ${
                      fieldErrors.message
                        ? "border-red-300 focus:ring-red-500"
                        : `border-slate-300 ${colors.focusRing} focus:border-transparent`
                    } focus:outline-none`}
                    placeholder="Any additional details, specific requirements, questions, or context you'd like to share with us..."
                  ></textarea>
                  {fieldErrors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {fieldErrors.message}
                    </p>
                  )}
                  <div className="mt-2 text-sm text-slate-500">
                    {formData.message.length}/1000 characters
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all duration-200"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !canSubmit}
                    className={`flex-1 font-bold py-4 px-8 rounded-xl transition-all duration-200 ${
                      canSubmit && !isSubmitting
                        ? `bg-gradient-to-r ${colors.gradient} ${colors.hoverGradient} text-white hover:scale-105 shadow-lg`
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
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
                      "Send Message 🚀"
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Quick Contact Options */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Need immediate assistance?
              </h3>
              <p className="text-slate-600">
                Reach out to us directly for faster response
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:resolutesolutions@hotmail.com"
                className={`flex items-center justify-center p-4 border-2 ${colors.border} rounded-xl ${colors.accent} hover:bg-gray-50 transition-all duration-200 group`}
              >
                <svg
                  className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform"
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
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-sm opacity-75">
                    resolutesolutions@hotmail.com
                  </div>
                </div>
              </a>
              <a
                href="tel:+918073570073"
                className={`flex items-center justify-center p-4 border-2 ${colors.border} rounded-xl ${colors.accent} hover:bg-gray-50 transition-all duration-200 group`}
              >
                <svg
                  className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform"
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
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-sm opacity-75">+91 80735 70073</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
