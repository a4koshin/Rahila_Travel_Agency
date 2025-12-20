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
    name: "About us",
    href: "/about",
  },
  {
    id: 2,
    name: "Our Service",
    href: "/services",
  },
  {
    id: 3,
    name: "Contact",
    href: "/contact",
  },
];
