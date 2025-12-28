export interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    image: "/paris.jpeg",
    title: "Travel Planning & Booking",
    description:
      "Professional and tailored travel planning and booking services for individuals and companies, ensuring safe and efficient journeys.",
  },
  {
    id: 2,
    image: "/dubia.jpeg",
    title: "Flight Ticket Services",
    description:
      "Competitive airline ticket solutions with flexible options for both personal and corporate travel needs.",
  },
  {
    id: 3,
    image: "/paris.jpeg",
    title: "Visa Management (eVisa, ETA, ESTA)",
    description:
      "Expert visa consultation and processing for destinations requiring eVisa, ETA, or ESTA approvals.",
  },
  {
    id: 4,
    image: "/dubia.jpeg",
    title: "Travel Support & Assistance",
    description:
      "Fast and accessible customer support before, during, and after travel to ensure a seamless experience.",
  },
];
