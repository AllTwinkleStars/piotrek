'use client';

import Link from "next/link";

const specializations = [
    {
        id: '1',
        name: 'Prawo Cywilne',
        href: '/specjalizacje/prawo-cywilne'
    },
    {
        id: '2',
        name: 'Prawo Rodzinne',
        href: '/specjalizacje/prawo-cywilne'
    },
    {
        id: '3',
        name: 'Odszkodowania',
        href: '/specjalizacje/prawo-cywilne'
    },
    {
        id: '4',
        name: 'Ksigi Wieczyste i Hipoteka',
        href: '/specjalizacje/prawo-cywilne'
    },
    {
        id: '5',
        name: 'Postępowanie Egzekucyjne',
        href: '/specjalizacje/prawo-cywilne'
    },
    {
        id: '6',
        name: 'Prawo Bankowe i Spółdzielcze',
        href: '/specjalizacje/prawo-cywilne'
    },
]

export default function SpecializationsMenu(){

    const menuItems = specializations.map(specialization => {
        return (
            <Link 
                className="border-t-2 border-pw-gold py-3"
                key={specialization.id} 
                href={specialization.href}>
                {specialization.name}
            </Link>
        )
    })

    return (
        <div className="flex flex-col w-full h-fit pt-8 uppercase font-bold border-t-4 border-b-2 border-pw-gold">
            <h1 className="text-pw-gold pb-4 text-[18px]">specjalizacje</h1>
            <div className="text-[14px] flex flex-col">
                {menuItems}
            </div>
        </div>
    )
}

