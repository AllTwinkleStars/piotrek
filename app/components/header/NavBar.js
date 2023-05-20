'use client';
 
import { usePathname } from 'next/navigation';
import Link from "next/link";
import HamIcon from "./HamMenuIcon";
import XIcon from "./X-icon";
import Logo from "./Logo";
import { useState } from "react";


export default function NavBar({pages}) {

    const pathname = usePathname();

    const navMenuItems = pages.map(page => {

        const isClicked = pathname === page.href ? true : false;

        return (
                <Link 
                    className={isClicked ? "border-b-4 border-pw-gold pb-2" : ""}
                    key={page.id} 
                    href={page.href}>
                    {page.name}
                </Link>
            )
    })

    const hamMenuItems = pages.map(page => {

        const isClicked = pathname === page.href ? true : false;

        return (
                <Link 
                    className={`border-b-2 border-b-white/50 text-[24px] font-bold tracking-wide py-2 ${isClicked ? "opacity-50" : ""}`}
                    key={page.id}
                    href={page.href}
                    onClick={() => setActive(!active)}>
                    {page.menu}
                </Link>
            )
    })

    const [active,setActive] = useState(false);

    return(
        <nav>
            {/* closed Navbar */}
            <div className="flex justify-between mb-12 px-14">
                <div className="lg:border-t-4 border-pw-gold lg:pt-7 lg:mt-[36px]">
                    <Logo />
                </div>
                <div className="h-[40px] justify-end gap-x-5 font-bold text-[14px] uppercase tracking-wide leading-7 hidden lg:flex">
                    {navMenuItems}
                </div>
                <div className='lg:hidden cursor-pointer' onClick={() => setActive(!active)}>
                    <HamIcon/>
                </div>
            </div>
            {/* opened Navbar */}
            <div>
                <div className={`flex flex-col justify-between top-0 fixed w-[100%] h-full px-[56px] py-10 border-t-4 border-pw-gold bg-pw-gold text-white lg:hidden ease-in-out duration-300 ${active ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* <div className={active
                ? "flex justify-between top-0 fixed w-[100%] h-full px-[56px] py-10 border-t-4 border-pw-gold bg-pw-gold text-white lg:hidden ease-in-out duration-300 right-0"
                : "flex justify-between top-0 fixed w-[100%] h-full px-[56px] py-10 border-t-4 border-pw-gold bg-pw-gold text-white lg:hidden ease-in-out duration-300 right-[-100vw]"}> */}
                    <div className='flex justify-between'>
                        <div>
                            <Logo />
                        </div>
                        <div className='w-7 h-6 cursor-pointer' onClick={() => setActive(!active)}>
                            <XIcon/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
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
