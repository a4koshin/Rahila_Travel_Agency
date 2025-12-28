interface QUICK {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
}

export const quickServices: QUICK[] = [
  {
    id: 0,
    img: "/dubia.jpeg",
    title: "Flight Ticket Booking",
    description:
      "Domestic and international airline ticket booking with competitive prices and flexible options.",
    price: 120.99,
  },
  {
    id: 1,
    img: "/paris.jpeg",
    title: "Visa Services",
    description:
      "Professional assistance for tourist, business, and student visa applications.",
    price: 99.99,
  },
  {
    id: 2,
    img: "/dubia.jpeg",
    title: "Travel Documentation",
    description:
      "Guidance on required travel documents, appointments, and application accuracy.",
    price: 999,
  },
];
