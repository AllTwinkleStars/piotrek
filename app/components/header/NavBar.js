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

        const isActive = pathname === page.href ? true : false;

        return (
                <Link 
                    className={isActive ? "border-b-4 border-sheen-gold pb-2" : ""}
                    key={page.id} 
                    href={page.href}>{page.name}
                </Link>
            )
    })

    const [active,setActive] = useState();

    return(
        <nav>
            <div className="mx-auto">
                <div className="justify-end gap-x-5 font-bold text-nav uppercase tracking-wide leading-7 hidden xl:flex">
                    {menuItems}
                </div>
                <div className='xl:hidden' onClick={() => setActive(!active)}>
                    <HamIcon/>
                </div>
            </div>
            <div>
                <div className={active ? "top-0 right-0 w-screen h-full bg-blue-500 absolute px-[136px] py-20":"hidden"}>
                    <div className='w-7 h-6 absolute right-[136px]' onClick={() => setActive(!active)}>
                        <XIcon/>
                    </div>
                </div>
            </div>
        </nav>

 )
}
