import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex justify-between max-w-[1366px] mx-auto px-14 py-8">
            <div className="text-pw-gold">
                <p className="text-xs">Kancelaria Adwokacka Piotr Tomasz Woźniak, ul. Kielecka 6, 31-516 Kraków</p>
            </div>
            <div className="flex gap-x-2 text-pw-gold text-xs">
                <Link href="/regulamin-strony"><span>Regulamin Strony</span></Link>
                <span>|</span>
                <Link href="/polityka-prywatnosci"><span>Polityka Prywatności</span></Link>
                <span>|</span>
                <Link href="/cookies"><span>Cookies</span></Link>
            </div>
        </div>
    )
}