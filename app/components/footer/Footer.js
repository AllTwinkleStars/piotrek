import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex justify-between">
            <div className="py-6 text-white">
                <p className="text-xs">Kancelaria Adwokacka Piotr Tomasz Woźniak, ul. Kielecka 6, 31-516 Kraków</p>
            </div>
            <div className="flex gap-x-2 py-5 text-white">
                <Link href="/regulamin-strony"><span className="text-xs">Regulamin Strony</span></Link>
                <span>|</span>
                <Link href="/polityka-prywatnosci"><span className="text-xs">Polityka Prywatności</span></Link>
                <span>|</span>
                <Link href="/cookies"><span className="text-xs">Cookies</span></Link>
            </div>
        </div>
    )
}