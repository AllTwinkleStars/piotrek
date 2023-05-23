import Link from "next/link"

export default function Logo(){
    return(
        <Link href="/">
            <div className="text-xl leading-8 tracking-widest uppercase w-55">
                <p className="font-light ">Kancelaria Adwokacka <br /> 
                    <span className="font-bold">Piotr Tomasz <span className="border-b-[4px] border-pw-gold">W</span>oźniak</span>
                </p>
            </div>
        </Link> 
    )
}


