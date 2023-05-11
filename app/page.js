'use client';
 
import { useRouter } from 'next/navigation';

export default function Home() {

  const zmienna = "Jestem Dupa ze zmiennej"
  const router = useRouter();

  return (
    <div>
      <h1>HOME</h1>
      <button className='bg-red-200' onClick={()=>router.push("/cookies")}>Cookies</button>
    </div>
  )
}
