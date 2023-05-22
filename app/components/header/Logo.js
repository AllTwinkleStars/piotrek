import Link from "next/link"

export default function Logo(){

    return(
        <Link href="/">
            <div className="text-xl uppercase w-55 tracking-widest">
                <p className="font-light ">Kancelaria Adwokacka <br /> 
                    <span className="font-bold">Piotr Tomasz Woźniak</span>
                </p>
            </div>
        </Link> 
    )
}


