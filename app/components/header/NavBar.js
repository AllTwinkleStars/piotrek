'use client';

import { useMenuContext } from '@/app/context/menu';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import HamIcon from "./HamMenuIcon";
import XIcon from "./X-icon";
import Logo from "./Logo";
import { useState } from "react";


export default function NavBar({pages}) {

    const pathname = usePathname();
    

    const checkPath = (page) => {
        const regex = /\/.+(?=[/])|\/.*/i;
        return pathname.match(regex)[0] === page.href ? true : false;
    }

    const navMenuItems = pages.map(page => {

        // console.log("pathname: ", pathname.match(regex))
        // console.log("page.href: ", page.href)

        const isClicked = checkPath(page);

        return (
                <Link 
                    className={isClicked ? "border-b-4 border-pw-gold" : ""}
                    key={page.id} 
                    href={page.href}>
                    {page.name}
                </Link>
            )
    })

    const hamMenuItems = pages.map(page => {

        const isClicked = checkPath(page);

        return (
                <Link 
                    className={`border-b border-b-white/50 text-[24px] font-serif tracking-wide py-1 ${isClicked ? "opacity-50" : ""}`}
                    key={page.id}
                    href={page.href}
                    onClick={() => setActive(!active)}>
                    {page.menu}
                </Link>
            )
    })

    const [active,setActive] = useState(false);

    const { isMenuOpen, setIsMenuopen } = useMenuContext();

    return(
        <nav>
            {/* closed Navbar */}
            <div className="flex justify-between mb-12 px-5 md:px-14 pt-8">
                <div className="lg:border-t-4 border-pw-gold lg:pt-8 lg:mt-9">
                    <Logo />
                </div>
                <div className="h-9 justify-end gap-x-5 font-bold text-[14px] uppercase tracking-wide leading-7 hidden lg:flex">
                    {navMenuItems}
                </div>
                <div className='lg:hidden cursor-pointer self-start' onClick={() => setActive(!active)}>
                    <HamIcon/>
                </div>
            </div>

            {/* opened Navbar */}
            <div>
                <div className={`flex flex-col justify-between top-0 fixed w-[100%] h-full px-5 md:px-[56px] pt-[48px] pb-4 bg-pw-gold text-white lg:hidden ease-in-out duration-300 ${active ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex justify-between'>
                        <div>
                            <Logo />
                        </div>
                        <div className='w-7 h-6 cursor-pointer' onClick={() => setActive(!active)}>
                            <XIcon/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {hamMenuItems}           
                    </div>
                    <div className='flex justify-between text-opacity-50'>
                        <p>ul. Kielecka 6 <br/> 31-516 Kraków</p>
                        <p>tel. +48 601 177 604 <br/> piotrwozniak@post.pl</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
