import Image from 'next/image';

export default function Home() {
  return (
    <main className="prose font-serif text-[18px]">
      <h1 className="font-sans">Adwokat Piotr Tomasz Woźniak</h1>
      <Image className='md:hidden'
        src="/piotr-wozniak.jpg"
        width={1000}
        height={500}
        quality={80}  
        alt="Picture of the author"
      />
      <p>
        Szanowni Państwo
      </p>
      <p>
        Nazywam się Piotr Tomasz Woźniak. Jestem adwokatem od 2008 r.
        prowadzącym własną Kancelarię Adwokacką. Specjalizuję się w sprawach
        z zakresu prawa cywilnego i rodzinnego. Szczegółowy zakres spraw
        prowadzonych przez moją Kancelarię znajdziecie Państwo w zakładce
        specjalizacje.
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
    </main>
  );
}
