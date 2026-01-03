import { FaHeadset, FaStar, FaUserCheck, FaMapMarkedAlt } from "react-icons/fa";
import { IconType } from "react-icons";

interface WhyChoose {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const whyChooseRahilaTravel: WhyChoose[] = [
  {
    id: 1,
    icon: FaUserCheck,
    title: "Personal service",
    description:
      "Every traveler is unique – that's why we customize every trip to your style, schedule, and budget.",
  },
  {
    id: 2,
    icon: FaMapMarkedAlt,
    title: "Expert knowledge",
    description:
      "With solid destination knowledge and strong industry partnerships, we offer well-founded recommendations and high quality at the right price.",
  },
  {
    id: 3,
    icon: FaStar,
    title: "Commitment to quality",
    description:
      "From first contact until you return home, we strive for a smooth and stress-free travel experience.",
  },
  {
    id: 4,
    icon: FaHeadset,
    title: "Reliable support",
    description:
      "Our service doesn't end with the booking – we are with you before, during and after the trip.",
  },
];
