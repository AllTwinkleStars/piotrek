import Link from "next/link";

export const metadata = {
  title:  'Prawo bankowe i spółdzielcze',
};

export default function PrawoBankoweSpoldzielczePage() {
    return (
      <article className="pt-4 font-sans leading-8 prose border-t-4 prose-h1:text-2xl prose-h1:text-pw-gold prose-h1:mb-8 lg:prose-h1:mb-12 prose-a:text-pw-green hover:prose-a:decoration-1 prose-a:underline-offset-4 prose-a:decoration-pw-gold hover:prose-a:underline hover:prose-a:decoration-pw-gold text-md border-t-pw-gold">
        <Link className="no-underline" href="/specjalizacje">
          <div className="flex items-center gap-4 pb-4 font-sans text-sm text-slate-500">
            <span className="font-normal no-underline">Specjalizacje</span>
            </div>
          </Link> 
        <h1 className="font-sans font-normal">Prawo bankowe i spółdzielcze</h1>
        <p>Kancelaria posiada doświadczenie w zakresie prawa bankowego i spółdzielczego nabyte w czasie wieloletniej obsługi Banku Spółdzielczego.</p>
      </article>
    )
  }