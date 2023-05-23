'use client';

import Link from "next/link";
import { data } from "@/app/data/data";

const specializations = data.filter(s => s.name === 'Specjalizacje')[0].sections;

export default function SpecializationsMenu(){

    const menuItems = specializations.map(specialization => {
        return (
            <Link 
                className="pt-5 pb-4 border-t lg:pt-4 lg:pb-3 border-pw-gold hover:text-pw-green-800"
                key={specialization.id} 
                href={specialization.href}>
                {specialization.name}
            </Link>
        )
    })

    return (
        <div className="flex flex-col w-full pt-8 border-t-4 border-b h-fit border-pw-gold">
            <h1 className="pb-4 text-xl font-normal tracking-wide lg:text-lg text-pw-gold">
                <Link href="/specjalizacje">Specjalizacje</Link>
            </h1>
            <div className="flex flex-col text-sm font-semibold tracking-wide uppercase lg:text-xs text-pw-green">
                {menuItems}
            </div>
        </div>
    )
}

