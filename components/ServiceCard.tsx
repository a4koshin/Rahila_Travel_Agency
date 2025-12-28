"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-2 hover:border-blue-100 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold text-blue-900">{title}</h3>

        <p className="mb-6 text-md leading-relaxed text-gray-600">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/kontaktaoss")}
          className="mt-auto inline-flex items-center justify-center rounded-md border border-blue-900 px-4 py-2 text-sm font-medium text-blue-900 transition-colors duration-200 hover:bg-blue-900 hover:text-white"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
