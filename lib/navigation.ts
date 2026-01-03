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
    href: "/about",
  },
  {
    id: 2,
    name: "Our Services",
    href: "/ourservice",
  },
  {
    id: 3,
    name: "Contact Us",
    href: "/contact",
  },
];
