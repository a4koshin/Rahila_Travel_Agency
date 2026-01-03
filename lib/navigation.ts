interface Navbar {
  id: number;
  name: string;
  href: string;
}

export const navbar: Navbar[] = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "About Us",
    href: "/aboutus",
  },
  {
    id: 2,
    name: "Våra tjänster",
    href: "/varatjanster",
  },
  {
    id: 3,
    name: " Kontakta oss",
    href: "/kontaktaoss",
  },
];
