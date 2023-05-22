import Image from "next/image";


export default function Photo(){
    return (
        <div className="h-55 w-full">
            <Image className='object-cover aspect-square'
            src="/piotr-wozniak.jpg"
            priority = {true}
            width={1000}
            height={500}
            quality={80}  
            alt="Picture of the author"
            />
        </div>
    )
}