export const metadata = {
  title:  'Kontakt',
};

export default function KontaktPage() {
    return (
      <article className="pt-8 font-sans leading-8 prose border-t-4 prose-h1:text-2xl prose-h1:text-pw-gold prose-h1:mb-12 prose-a:text-pw-green prose-a:underline prose-a:decoration-1 hover:prose-a:decoration-2 prose-a:underline-offset-4 prose-a:decoration-pw-gold hover:prose-a:underline hover:prose-a:decoration-pw-gold text-md border-t-pw-gold">
        <h1 className="font-sans font-normal">Kontakt</h1>
        <p>ul. Kielecka 6, 31-516 Kraków<br />
        <a className="font-normal no-underline prose-a:no-underline text-inherit" href="tel:+48601177604">tel. +48 601 177 604</a><br />
        <a className="font-normal prose-a:no-underline text-inherit" href="mailto:piotrwozniak@post.pl">piotrwozniak@post.pl</a></p>
      </article>
    )
  }