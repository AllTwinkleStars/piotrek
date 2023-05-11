'use client';
 
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function NavBar({pages}) {

    const pathname = usePathname();

    const menuItems = pages.map(page => {

        const isActive = pathname === page.href ? true : false;

        return (
                <Link 
                    className={isActive ? "text-blue-500" : ""}
                    key={page.id} 
                    href={page.href}>{page.name}
                </Link>
            )
    })


    console.log(pathname);
 return(
    <nav>
        <div className="py-4 px-16 mx-auto border border-red-400 bg-slate-400">
            <div className="flex justify-end gap-x-4">
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
