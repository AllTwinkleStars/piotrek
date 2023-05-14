'use client';
 
import { usePathname } from 'next/navigation';
import Link from "next/link";

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


    console.log(pathname);
 return(
    <nav>
        <div className="mx-auto">
            <div className="flex justify-end gap-x-6 font-bold text-nav tracking-wide">
                {menuItems}
                

                {/* <Link href={"/"}><span className="hover:text-blue-500 lg:bg-slate-300">STRONA GŁÓWNA</span></Link>   
                <Link href={"/o-kancelarii"}><span className="lg:bg-slate-300">O KANCELARII</span></Link>  
                <Link href={"/specjalizacje"}>SPECJALIZACJE</Link>   
                <Link href={"/artykuly"}>ARTYKUŁY</Link>    
                <Link href={"/kontakt"}>KONTAKT</Link> */}
            </div>
        </div>
    </nav>

 )
}
