'use client';

import NavBar from "./NavBar";
import Logo from "./Logo";

const pages = [
  {
    id: "1",
    name: "Strona Główna",
    href: "/",
  },
  {
    id: "2",
    name: "O Kancelarii",
    href: "/o-kancelarii",
  },
  {
    id: "3",
    name: "Specjalizacje",
    href: "/specjalizacje",
  },
  {
    id: "4",
    name: "Artykuły",
    href: "/artykuly",
  },
  {
    id: "5",
    name: "Kontakt",
    href: "/kontakt",
  },
];

export default function Header() {

  return (
      <div>
        <NavBar pages={pages} />
      </div>
  );
}
