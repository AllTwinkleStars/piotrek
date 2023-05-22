'use client';

import NavBar from "./NavBar";
import { data } from "@/app/data/data";



export default function Header() {

  return (
    //TU WSTAWIĆ LOGO
    <header>
        <NavBar pages={data} />
    </header>    
  );
}
