"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Model } from "@/components/Model";
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:border-amber-100">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-white/95 px-4 py-2 rounded-full shadow-md">
          <span className="font-bold text-amber-700">${price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-blue-900 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>

        <p className="mb-6 text-gray-600 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* <button className="w-full rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 py-3 font-semibold text-amber-700 transition-all hover:from-amber-100 hover:to-amber-200">
          Learn More
        </button> */}
        {/* Action Button */}
        <button
          onClick={() => {
            setIsOpen(false);
            setIsModelOpen(true); // This was missing!
          }}
          className="group/btn w-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 font-semibold py-3 px-4 rounded-xl hover:from-amber-100 hover:to-amber-200 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>Book Service</span>
          <svg
            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
      {/* Render the Model component */}
      <Model isOpen={isModelOpen} onClose={() => setIsModelOpen(false)} />
    </div>
  );
};

export default ServiceCard;
