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

    const position = active ? '0' : '[-100%]'

    return(
        <nav>
            {/* closed Navbar */}
            <div className="flex justify-between mb-12">
                <div className="lg:border-t-4 border-sheen-gold lg:pt-7 lg:mt-[36px]">
                    <Logo />
                </div>
                <div className="h-[40px] justify-end gap-x-5 font-bold text-nav uppercase tracking-wide leading-7 hidden lg:flex">
                    {menuItems}
                </div>
                <div className='lg:hidden cursor-pointer' onClick={() => setActive(!active)}>
                    <HamIcon/>
                </div>
            </div>
            {/* opened Navbar */}
            <div>
                <div className={`flex justify-between top-0 fixed w-[100%] h-full px-[56px] py-10  border-t-4 border-sheen-gold bg-sheen-gold text-white lg:hidden ease-in-out duration-300 right-[-100%]`}>
                    <div>
                        <Logo />
                    </div>
                    <div className='w-7 h-6 cursor-pointer' onClick={() => setActive(!active)}>
                        <XIcon/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
