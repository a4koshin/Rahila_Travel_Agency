import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-blue-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
