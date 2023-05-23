export const metadata = {
  title:  'Prawo rodzinne',
};

export default function PrawoRodzinnePage() {
    return (
      <article className="pt-8 font-sans leading-8 prose border-t-4 prose-h1:text-2xl prose-h1:text-pw-gold prose-h1:mb-12 prose-a:text-pw-green prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-pw-gold hover:prose-a:decoration-1 hover:prose-a:underline-offset-4 text-md border-t-pw-gold">
        <h1 className="font-sans font-normal">Specjalizacje / Prawo rodzinne</h1>
        <p>Kancelaria prowadzi sprawy z zakresu prawa rodzinnego w zakresie:</p>
        <ul>
          <li>rozwodów i separacji (w tym z orzekaniem o winie)</li>
          <li>podziału majątku wspólnego (w tym zgodny przed notariuszem)</li>
          <li>ustanowienia rozdzielności majątkowej w czasie małżeństwa</li>
          <li>alimentów (ustalenie, podwyższenie, obniżenie, wygaśnięcie)</li>
          <li>władzy rodzicielskiej (powierzenie, zmiana zakresu, pozbawienie)</li>
          <li>ustanowienia rodziny zastępczej</li>
          <li>ustalenia/zaprzeczenia ojcostwa </li>
          <li>kontaktów z dziećmi (wnukami)</li>
          <li>ubezwłasnowolnienia całkowite i częściowe</li>
        </ul>
      </article>
    )
  }