export const metadata = {
  title:  'Odszkodowania',
};

export default function OdszkodowaniaPage() {
    return (
      <article className="pt-8 font-sans leading-8 prose border-t-4 prose-h1:text-2xl prose-h1:text-pw-gold prose-h1:mb-12 prose-a:text-pw-green prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-pw-gold hover:prose-a:decoration-1 hover:prose-a:underline-offset-4 text-md border-t-pw-gold">
        <h1 className="font-sans font-normal">Odszkodowania</h1>
        <p>Kancelaria prowadzi sprawy o odszkodowanie w zakresie:</p> 
        <ul>
          <li>szkód na osobie</li>
          <li>szkód w mieniu</li>
          <li>związanych z czynem niedozwolonym</li>
          <li>za wywłaszczenie nieruchomości</li>
          <li>za bezumowne korzystanie z nieruchomości</li>
        </ul>
      </article>
    )
  }