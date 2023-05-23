'use client';

import NavBar from "./NavBar";
import { data } from "@/app/data/data";

export default function Header() {

  return (
    <header>
        {/* TU WSTAWIĆ LOGO */}
        <NavBar pages={data} />
    </header>    
  );
}