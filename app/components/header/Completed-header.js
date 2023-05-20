'use client';

import NavBar from "./NavBar";

const pages = [
  {
    id: "1",
    name: "Adw. Piotr T. Woźniak",
    menu: "Adwokat Piotr T. Woźniak",
    href: "/",
  },
  {
    id: "2",
    name: "O Kancelarii",
    menu: "O Kancelarii",
    href: "/o-kancelarii",
  },
  {
    id: "3",
    name: "Specjalizacje",
    menu: "Specjalizacje",
    href: "/specjalizacje",
  },
  {
    id: "4",
    name: "Artykuły",
    menu: "Artykuły",
    href: "/artykuly",
  },
  {
    id: "5",
    name: "Kontakt",
    menu: "Kontakt",
    href: "/kontakt",
  },
];

export default function Header() {

  return (
        <NavBar pages={pages} />
  );
}
