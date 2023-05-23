import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
  return (
    <article className="pt-0 font-sans leading-8 prose md:pt-8 md:border-t-4 prose-h1:text-2xl prose-h1:text-pw-gold prose-h1:mb-8 lg:prose-h1:mb-12 prose-a:text-pw-green prose-a:underline prose-a:decoration-1 hover:prose-a:decoration-2 prose-a:underline-offset-4 prose-a:decoration-pw-gold hover:prose-a:underline hover:prose-a:decoration-pw-gold text-md md:border-t-pw-gold">
      <h1 className="font-sans font-normal">Adwokat Piotr Tomasz Woźniak</h1>
      <Image className='md:hidden'
        src="/piotr-wozniak.jpg"
        priority = {true}
        width={1000}
        height={500}
        quality={80}  
        alt="Adwokat Piotr Tomasz Woźniak"
      />
      <p>
        Szanowni Państwo
      </p>
      <p>
        Nazywam się Piotr Tomasz Woźniak. Jestem adwokatem od 2008 r.
        prowadzącym własną Kancelarię Adwokacką. Specjalizuję się w sprawach
        z zakresu prawa cywilnego i rodzinnego. Szczegółowy zakres spraw
        prowadzonych przez moją Kancelarię znajdziecie Państwo w zakładce <Link href="/specjalizacje">specjalizacje</Link>.
      </p>
      <p>
        Udzielam pomocy prawnej na każdym etapie sprawy zarówno w postępowaniu
        przedprocesowym lub pozaprocesowym, jak i w trakcie postępowań sądowych.
        O ile to możliwe, staram się sprawę rozwiązać w sposób jak najszybszy i równocześnie najmniej kosztowny dla Klienta. Zdobyte doświadczenie
        zawodowe i życiowe pozwalają mi też w sposób rzetelny zaproponować
        najkorzystniejszy dla Państwa sposób przeprowadzenia i zakończenia
        sprawy.
      </p>
      <p>
        Od wielu lat współpracuję z zaufanymi prawnikami o różnych
        specjalizacjach, dzięki którym mam możliwość oceny sprawy, w przypadku
        wyjątkowego lub nader rzadko spotykanego stanu faktycznego lub prawnego.
      </p>
      <p>
        Niezależnie od zdobytego dotychczas doświadczenia cały czas poszerzam
        swoją wiedzę uczestnicząc w licznych szkoleniach.
      </p>
      <p>
        Jestem przekonany, że jestem w stanie pomóc Państwu w rozwiązaniu
        Państwa problemów i zapraszam do współpracy.
      </p>
      <p>
        Pozostaję z poważaniem
      </p>
    </article>
  );
}
