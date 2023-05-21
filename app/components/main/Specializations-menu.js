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
                className="border-t border-pw-gold py-3"
                key={specialization.id} 
                href={specialization.href}>
                {specialization.name}
            </Link>
        )
    })

    return (
        <div className="flex flex-col w-full h-fit pt-8 uppercase font-bold border-t-4 border-b border-pw-gold">
            <h1 className="text-pw-gold pb-4 text-lg tracking-wide">Specjalizacje</h1>
            <div className="text-sm flex flex-col">
                {menuItems}
            </div>
        </div>
    )
}

