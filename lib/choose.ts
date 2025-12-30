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
    title: "Personlig service",
    description:
      "Varje resenär är unik – därför anpassar vi varje resa efter din stil, ditt schema och din budget.",
  },
  {
    id: 2,
    icon: FaMapMarkedAlt,
    title: "Expertkunskap",
    description:
      "Med gedigen destinationskunskap och starka branschpartnerskap erbjuder vi välgrundade rekommendationer och hög kvalitet till rätt pris.",
  },
  {
    id: 3,
    icon: FaStar,
    title: "Engagemang för kvalitet",
    description:
      "Från första kontakt till dess att du är hemma igen strävar vi efter en smidig och stressfri reseupplevelse.",
  },
  {
    id: 4,
    icon: FaHeadset,
    title: "Pålitlig support",
    description:
      "Vår service slutar inte vid bokningen – vi finns med dig före, under och efter resan.",
  },
];
