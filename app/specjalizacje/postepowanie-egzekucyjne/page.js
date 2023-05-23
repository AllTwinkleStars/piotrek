import Link from "next/link";

export const metadata = {
  title:  'Postępowanie egzekucyjne',
};

export default function PostepowanieEgzekucyjnePage() {
    return (
      <article className="pt-4 font-sans leading-8 prose border-t-4 prose-h1:text-2xl prose-h1:text-pw-gold prose-h1:mb-8 lg:prose-h1:mb-12 prose-a:text-pw-green hover:prose-a:decoration-1 prose-a:underline-offset-4 prose-a:decoration-pw-gold hover:prose-a:underline hover:prose-a:decoration-pw-gold text-md border-t-pw-gold">
        <Link className="no-underline" href="/specjalizacje">
          <div className="flex items-center gap-4 pb-4 font-sans text-sm text-slate-500">
            <span className="font-normal no-underline">Specjalizacje</span>
            </div>
          </Link> 
        <h1 className="font-sans font-normal">Postępowanie egzekucyjne</h1>
        <p>Kancelaria prowadzi sprawy egzekucyjne związane&nbsp;z:</p>
        <ul>
          <li>inicjowaniem i prowadzeniem spraw egzekucyjnych u komornika</li>
          <li>skargą na czynności komornika (zajęcie nieruchomości, ruchomości, rachunku bankowego, ustalenie kosztów egzekucyjnych)</li>
          <li>egzekucją z majątku wspólnego</li>
          <li>pozbawianiem wykonalności tytułów wykonawczych</li>
        </ul>
      </article>
    )
  }