'use client';
 
import { usePathname } from 'next/navigation';
import Link from "next/link";
import HamIcon from "./HamMenuIcon";
import XIcon from "./X-icon";
import Logo from "./Logo";
import { useState } from "react";


export default function NavBar({pages}) {

    const pathname = usePathname();

    const menuItems = pages.map(page => {

        const isClicked = pathname === page.href ? true : false;

        return (
                <Link 
                    className={isClicked ? "border-b-4 border-sheen-gold pb-2" : ""}
                    key={page.id} 
                    href={page.href}>{page.name}
                </Link>
            )
    })

    const [active,setActive] = useState(false);

    return(
        <nav>
            {/* closed Navbar */}
            <div className="flex justify-between mb-12">
                <div className="border-t-4 border-sheen-gold pt-7 mt-[36px]">
                    <Logo />
                </div>
                <div className="h-[40px] justify-end gap-x-5 font-bold text-nav uppercase tracking-wide leading-7 hidden xl:flex">
                    {menuItems}
                </div>
                <div className='xl:hidden' onClick={() => setActive(!active)}>
                    <HamIcon/>
                </div>
            </div>
            {/* opened Navbar */}
            <div>
                <div className={
                    active 
                        ? "flex justify-between top-0 fixed right-0 w-[100%] h-full bg-sheen-gold  px-[136px] py-20 text-white xl:hidden ease-in-out duration-300"
                        : "flex justify-between top-0 fixed right-[-100%] w-[100%] h-full px-[136px] py-20 ease-in-out duration-300 bg-sheen-gold text-white xl:hidden"}>
                    <div>
                        <Logo />
                    </div>
                    <div className='w-7 h-6' onClick={() => setActive(!active)}>
                        <XIcon/>
                    </div>
                </div>
            </div>
        </nav>

 )
}
