import React from "react";
import { services } from "@/lib/Services";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
const ServicePage = () => {
  return (
    <>
      {/* Heading section */}
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
              Our services
            </h1>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-8 py-16 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicePage;
