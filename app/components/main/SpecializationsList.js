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
        href: '/specjalizacje/prawo-rodzinne'
    },
    {
        id: '3',
        name: 'Odszkodowania',
        href: '/specjalizacje/odszkodowania'
    },
    {
        id: '4',
        name: 'Księgi Wieczyste i Hipoteka',
        href: '/specjalizacje/ksiegi-wieczyste-i-hipoteka'
    },
    {
        id: '5',
        name: 'Postępowanie Egzekucyjne',
        href: '/specjalizacje/postepowanie-egzekucyjne'
    },
    {
        id: '6',
        name: 'Prawo Bankowe i Spółdzielcze',
        href: '/specjalizacje/prawo-bankowe-i-spoldzielcze'
    },
]

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

