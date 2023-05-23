import Link from "next/link";

export const metadata = {
  title:  'Specjalizacje',
};

export default function SpecjalizacjePage() {
    return (
      <article className="pt-8 font-sans leading-8 prose border-t-4 prose-h1:text-2xl prose-h1:text-pw-gold prose-h1:mb-8 lg:prose-h1:mb-12 prose-a:text-pw-green-900 prose-a:no-underline hover:prose-a:decoration-1 prose-a:underline-offset-4 prose-a:decoration-pw-gold-300 hover:prose-a:text-pw-green-800 hover:prose-a:underline hover:prose-a:decoration-pw-gold text-md border-t-pw-gold">
      <h1 className="font-sans font-normal">Specjalizacje</h1>
        <p>Kancelaria specjalizuje się w prowadzeniu spraw z zakresu:</p>
        <ul>
          <li><Link className="font-normal" href="/specjalizacje/prawo-cywilne"><strong>prawa cywilnego</strong></Link></li>
          <li><Link className="font-normal" href="/specjalizacje/prawo-rodzinne"><strong>prawa rodzinnego</strong></Link></li>
          <li><Link className="font-normal" href="/specjalizacje/odszkodowania">odszkodowań</Link></li>
          <li><Link className="font-normal" href="/specjalizacje/ksiegi-wieczyste-i-hipoteka">ksiąg wieczystych i hipotek</Link></li>
          <li><Link className="font-normal" href="/specjalizacje/postepowanie-egzekucyjne">postępowania egzekucyjnego</Link></li>
          <li><Link className="font-normal" href="/specjalizacje/prawo-bankowe-i-spoldzielcze">prawa bankowego i spółdzielczego</Link></li>
        </ul>
      </article>  
    )
  }