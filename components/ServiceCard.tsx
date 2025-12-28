import React from "react";
import Image from "next/image";

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

        <button className="w-full rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 py-3 font-semibold text-amber-700 transition-all hover:from-amber-100 hover:to-amber-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
