"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, Sparkles } from "lucide-react";
import Image from "next/image";
type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const PHONE_NUMBER = "+46 73 663 30 55";

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name too short";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message too short";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const whatsappUrl =
        `https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}?text=` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Message: ${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setStatus("Message sent. Redirecting to WhatsApp...");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneClick = () => {
    window.open(`tel:${PHONE_NUMBER}`, "_self");
  };

  return (
    <>
      {/* Minimal Header */}
      <div className="relative min-h-[50px] flex items-center mb-18 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/dubia.jpeg"
            alt="Travel background"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-950/70"></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="relative mb-12 text-center">
            {/* Badge/Logo indicator */}
            <div className="inline-flex items-center justify-center mb-6"></div>

            {/* Main heading */}
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-amber-400 bg-clip-text text-transparent tracking-tight">
              Kontakta oss
            </h1>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Form Card */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-blue-950">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-lg border bg-transparent transition-colors ${
                      errors.name
                        ? "border-red-300"
                        : "border-gray-200 focus:border-amber-500"
                    } focus:outline-none focus:ring-1 focus:ring-amber-500/20`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-blue-950">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-lg border bg-transparent transition-colors ${
                      errors.email
                        ? "border-red-300"
                        : "border-gray-200 focus:border-amber-500"
                    } focus:outline-none focus:ring-1 focus:ring-amber-500/20`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-blue-950">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setMessage(e.target.value)
                  }
                  className={`w-full px-4 py-3 rounded-lg border bg-transparent resize-none transition-colors ${
                    errors.message
                      ? "border-red-300"
                      : "border-gray-200 focus:border-amber-500"
                  } focus:outline-none focus:ring-1 focus:ring-amber-500/20`}
                  placeholder="Tell us about your travel plans..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-950 hover:bg-blue-900 text-white font-medium py-6 rounded-lg transition-colors border border-blue-950"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {status && (
                  <div
                    className={`mt-4 p-3 rounded-lg text-sm ${
                      status.includes("successfully")
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {status}
                  </div>
                )}
              </div>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="mx-4 text-gray-400 text-sm">or</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            {/* Direct Contact */}
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-4">Prefer to call?</p>
              <button
                onClick={handlePhoneClick}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 hover:border-amber-500 text-blue-950 hover:text-amber-500 rounded-lg transition-colors"
              >
                Call us: {PHONE_NUMBER}
              </button>
              <p className="text-xs text-gray-400 mt-3">
                Mon-Fri 9am-6pm • Emergency 24/7
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              After submission, you'll be redirected to WhatsApp to chat
              directly with our travel expert.
              <br />
              <span className="text-amber-500">
                We respond within 1 hour during business hours.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
