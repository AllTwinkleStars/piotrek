'use client';
import { useMenuContext } from '@/app/context/menu';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Logo from "./Logo";
import IconHumburger from "./IconHamburger";
import IconClose from './IconClose';


export default function NavBar({pages}) {

    const pathname = usePathname();
    
    const checkPath = (page) => {
        const regex = /\/.+(?=[/])|\/.*/i;
        return pathname.match(regex)[0] === page.href ? true : false;
    }

    const navMenuItems = pages.map(page => {

        const isClicked = checkPath(page);

        return (
                <Link 
                    className={isClicked ? "border-b-4 border-pw-gold" : "hover:text-pw-green-800"}
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
                className={`text-2xl font-sans font-extralight tracking-wide py-1 ${isClicked ? "underline underline-offset-8 decoration-pw-gold decoration-4" : ""}`}
                key={page.id}
                href={page.href}
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {page.menu}
            </Link> 
        )
    })

    const { isMenuOpen, setIsMenuOpen } = useMenuContext();

    return(
        <nav>
            {/* closed Navbar */}
            <div className="z-50 flex justify-between px-5 pt-6 mb-16 md:px-14">
                <div className="text-pw-green lg:pt-8 lg:mt-9">
                    <Logo />
                </div>
                <div className="bg-white text-pw-green font-semibold h-9 justify-end gap-x-5 text-[14px] uppercase tracking-wide leading-7 hidden lg:flex">
                    {navMenuItems}
                </div>
                <div className='self-start cursor-pointer lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IconHumburger />
                </div>
            </div>

            {/* opened Navbar */}
            <div>
                <div className={`z-50 flex flex-col justify-between top-0 fixed w-[100%] h-full px-5 md:px-[56px] pt-[56px] pb-4 bg-pw-green text-white lg:hidden ease-in-out duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex justify-between'>
                        <div>
                            <Logo />
                        </div>
                        <div className='h-6 cursor-pointer w-7' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <IconClose/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {hamMenuItems}           
                    </div>
                    <div className='pb-8 font-light leading-7 text-white'>
                        <p>                
                            ul. Kielecka 6, 31-516 Kraków<br/>
                            tel. +48 601 177 604<br/>
                            <a href="mailto:piotrwozniak@post.pl">
                                piotrwozniak@post.pl
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
