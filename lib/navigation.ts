interface Navbar {
  id: number;
  name: string;
  href: string;
}

export const navbar: Navbar[] = [
  {
    id: 0,
    name: "Hem",
    href: "/",
  },
  {
    id: 1,
    name: "Om oss",
    href: "/omoss",
  },
  {
    id: 2,
    name: "Våra tjänster",
    href: "/våratjänster",
  },
  {
    id: 3,
    name: " Kontakta oss",
    href: "/kontaktaoss",
  },
];
