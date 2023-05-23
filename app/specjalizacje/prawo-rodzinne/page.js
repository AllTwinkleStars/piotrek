import Link from "next/link";

export const metadata = {
  title:  'Prawo rodzinne',
};

export default function PrawoRodzinnePage() {
    return (
      <article className="pt-4 font-sans leading-8 prose border-t-4 prose-h1:text-2xl prose-h1:text-pw-gold prose-h1:mb-8 lg:prose-h1:mb-12 prose-a:text-pw-green hover:prose-a:decoration-1 prose-a:underline-offset-4 prose-a:decoration-pw-gold hover:prose-a:underline hover:prose-a:decoration-pw-gold text-md border-t-pw-gold">
        <Link className="no-underline" href="/specjalizacje">
          <div className="flex items-center gap-4 pb-4 font-sans text-sm text-slate-500">
            <span className="font-normal no-underline">Specjalizacje</span>
            </div>
          </Link> 
        <h1 className="font-sans font-normal">Prawo rodzinne</h1>
        <p>Kancelaria prowadzi sprawy z&nbsp;zakresu prawa rodzinnego w&nbsp;zakresie:</p>
        <ul>
          <li>rozwodów i separacji (w tym z&nbsp;orzekaniem o&nbsp;winie)</li>
          <li>podziału majątku wspólnego (w&nbsp;tym zgodny przed notariuszem)</li>
          <li>ustanowienia rozdzielności majątkowej w&nbsp;czasie małżeństwa</li>
          <li>alimentów (ustalenie, podwyższenie, obniżenie, wygaśnięcie)</li>
          <li>władzy rodzicielskiej (powierzenie, zmiana zakresu, pozbawienie)</li>
          <li>ustanowienia rodziny zastępczej</li>
          <li>ustalenia/zaprzeczenia ojcostwa </li>
          <li>kontaktów z&nbsp;dziećmi (wnukami)</li>
          <li>ubezwłasnowolnienia całkowite i&nbsp;częściowe</li>
        </ul>
      </article>
    )
  }