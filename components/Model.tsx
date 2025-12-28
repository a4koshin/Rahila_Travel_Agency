// components/BookingModal.jsx
import React, { useState, useEffect } from "react";
import {
  X,
  Plane,
  User,
  Mail,
  Calendar,
  MessageSquare,
  Loader2,
} from "lucide-react";

type ModelProps = {
  isOpen: boolean;
  onClose: () => void;
  email: string;
};

export const Model: React.FC<ModelProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fromDate: "",
    toDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // const email = "agent@rahilatravel.com";
  const email = "mohamed.hass.dev@gmail.com";

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Format dates
      const formattedFromDate = formData.fromDate
        ? new Date(formData.fromDate).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Not specified";

      const formattedToDate = formData.toDate
        ? new Date(formData.toDate).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Not specified";

      // Email content
      const subject = `New Travel Booking Request from ${formData.name}`;
      const body = `
      New Travel Booking Request
      -------------------------
      Name: ${formData.name}
      Email: ${formData.email}
      Travel Dates: ${formattedFromDate} to ${formattedToDate}
      Message: ${formData.message}
      -------------------------
      Submitted: ${new Date().toLocaleString()}
    `;

      // 🔹 Gmail APP (Android – best effort)
      const gmailAppLink = `googlegmail://co?to=${email}.com&subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // 🔹 Gmail WEB (fallback)
      const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mohamed.hass.dev@gmail.com.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Try Gmail App first
      window.location.href = gmailAppLink;

      // Fallback to Gmail Web
      setTimeout(() => {
        window.open(gmailWebLink, "_blank");
      }, 500);

      // Success UI
      setSubmitStatus("success");

      // Clear form
      setFormData({
        name: "",
        email: "",
        fromDate: "",
        toDate: "",
        message: "",
      });

      // Auto close
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Close when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] animate-in fade-in-0 duration-300"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl max-w-md w-full border border-gray-200 shadow-xl animate-in slide-in-from-bottom-4 duration-300 max-h-[85vh] overflow-y-auto">
        <div className="p-6 space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-950/10 rounded-lg">
                <Plane className="w-5 h-5 text-blue-950" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-blue-950">
                  Quick Booking Inquiry
                </h2>
                <p className="text-gray-500 text-xs">
                  Get your custom travel plan
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-700 text-sm font-medium">
                ✓ Booking request sent! Opening email client...
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-700 text-sm font-medium">
                ✗ Something went wrong. Please try again or email us directly at
                mankajr11@gmail.com
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block mb-1.5 text-xs font-medium text-blue-950 uppercase tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all text-sm"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-1.5 text-xs font-medium text-blue-950 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all text-sm"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Date Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block mb-1.5 text-xs font-medium text-blue-950 uppercase tracking-wider">
                  From
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="fromDate"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all text-sm"
                    value={formData.fromDate}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1.5 text-xs font-medium text-blue-950 uppercase tracking-wider">
                  To
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="toDate"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all text-sm"
                    value={formData.toDate}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block mb-1.5 text-xs font-medium text-blue-950 uppercase tracking-wider">
                Trip Details
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your travel plans..."
                  rows={2}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all resize-none text-sm"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-amber-400 text-blue-950 font-semibold py-2.5 px-4 rounded-lg hover:bg-amber-500 transition-all duration-200 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-md"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Plane className="w-4 h-4" />
                  <span>Send Booking Request</span>
                </>
              )}
            </button>

            {/* Privacy notice */}
            <p className="text-xs text-gray-500 text-center">
              We'll email you at{" "}
              <span className="text-blue-950 font-medium">
                agent@rahilatravel.com
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
