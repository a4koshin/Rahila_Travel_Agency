import React from "react";
import { quickServices } from "@/lib/quickServices";
import ServiceCard from "@/components/ServiceCard";

const ServicePage = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold text-blue-900">Our Services</h2>
        <p className="text-gray-600">
          We provide professional and tailored travel agency services for
          individuals and companies, including flight tickets and visa
          management.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {quickServices.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.img}
            title={service.title}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
