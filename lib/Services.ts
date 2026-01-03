export interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export const services: Service[] = [
  {
    id: 1,
    image: "/planing.png",
    title: "Travel Planning & Booking",
    description:
      "Professional and tailored travel planning and booking services for individuals and companies, ensuring safe and efficient journeys.",
    price: 499.99,
  },
  {
    id: 2,
    image: "/dubia.jpeg",
    title: "Flight Ticket Services",
    description:
      "Competitive airline ticket solutions with flexible options for both personal and corporate travel needs.",
    price: 699.99,
  },
  {
    id: 3,
    image: "/paris.jpeg",
    title: "Visa Management (eVisa, ETA, ESTA)",
    description:
      "Expert visa consultation and processing for destinations requiring eVisa, ETA, or ESTA approvals.",
    price: 899.99,
  },
  {
    id: 4,
    image: "/support.png",
    title: "Travel Support & Assistance",
    description:
      "Fast and accessible customer support before, during, and after travel to ensure a seamless experience.",
    price: 1099.99,
  },
];
