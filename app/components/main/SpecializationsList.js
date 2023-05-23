'use client';

import Link from "next/link";
import { data } from "@/app/data/data";

const specializations = data.filter(s => s.name === 'Specjalizacje')[0].sections;

export default function SpecializationsMenu(){

    const menuItems = specializations.map(specialization => {
        return (
            <Link 
                className="py-3 border-t border-pw-gold"
                key={specialization.id} 
                href={specialization.href}>
                {specialization.name}
            </Link>
        )
    })

    return (
        <div className="flex flex-col w-full pt-8 border-t-4 border-b h-fit border-pw-gold">
            <h1 className="pb-4 text-lg font-normal tracking-wide text-pw-gold"><Link href="/specjalizacje">Specjalizacje</Link></h1>
            <div className="flex flex-col text-xs font-semibold tracking-wide uppercase text-pw-green">
                {menuItems}
            </div>
        </div>
    )
}

