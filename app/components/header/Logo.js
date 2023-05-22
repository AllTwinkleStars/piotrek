import Link from "next/link"

export default function Logo(){

    return(
        <Link href="/">
            <div className="text-xl w-55 tracking-widest">
                <p className="font-light">KANCELARIA ADWOKACKA <br /> 
                    <span className="font-bold">PIOTR TOMASZ WOŹNIAK</span>
                </p>
            </div>
        </Link>
    )
}


