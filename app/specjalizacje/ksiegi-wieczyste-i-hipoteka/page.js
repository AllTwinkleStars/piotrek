import Link from "next/link";

export const metadata = {
  title:  'Księgi wieczyste i hipoteka',
};

export default function KsiegiWieczysteHipotekaPage() {
    return (
      <article className="pt-4 font-sans leading-8 prose border-t-4 prose-h1:text-2xl prose-h1:text-pw-gold prose-h1:mb-8 lg:prose-h1:mb-12 prose-a:text-pw-green hover:prose-a:decoration-1 prose-a:underline-offset-4 prose-a:decoration-pw-gold hover:prose-a:underline hover:prose-a:decoration-pw-gold text-md border-t-pw-gold">
        <Link className="no-underline" href="/specjalizacje">
          <div className="flex items-center gap-4 pb-4 font-sans text-sm text-slate-500">
            <span className="font-normal no-underline">Specjalizacje</span>
            </div>
          </Link> 
        <h1 className="font-sans font-normal">Księgi wieczyste i hipoteka</h1>
        <p>Kancelaria prowadzi sprawy związane z&nbsp;księgami wieczystymi i&nbsp;hipoteką w&nbsp;zakresie:</p> 
        <ul>
          <li>założenia księgi wieczystej (w tym dla nieruchomości, dla których były prowadzone księgi dawne takie jak lwh czy wykazy hipoteczne)</li>
          <li>wpisów i wykreśleń wpisów (własności i&nbsp;udziałów we współwłasności, podziału i połączenia nieruchomości, hipotek umownych i&nbsp;hipotek przymusowych, ostrzeżeń, zakazów, służebności, roszczeń)</li>
          <li>uzgodnienia treści księgi wieczystej z&nbsp;rzeczywistym stanem prawnym.</li>
        </ul>
      </article>
    )
  }