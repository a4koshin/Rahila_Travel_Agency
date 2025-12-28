import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/Services"; // adjust path if needed

const ServicesSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold text-blue-900">Our Services</h2>
        <p className="text-gray-600">
          We provide professional and tailored travel agency services for
          individuals and companies, including flight tickets and visa
          management.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service: any) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
