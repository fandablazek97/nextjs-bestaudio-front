import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";

export default function SectionTemplate() {
  return (
    <>
      <ScrollReveal>
        <Heading as={"h2"} size="xl" className="max-w-3xl" color="primary">
          Proč chtít lepší zvuk a komfort v autě?
        </Heading>
      </ScrollReveal>
      <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-28 sm:grid-cols-2 lg:mt-40 lg:gap-14">
        <ScrollReveal className="col-span-1">
          <Heading as={"h3"} size="lg" className="mb-6">
            Komfort na prvním místě a rezonance jsou nežádoucí
          </Heading>
          <p>
            Ať už to jsou výmoly, jízda po kostkách, či jen obyčejná jízda po
            dálnici &bdquo;stotřicítkou&rdquo;. Každý od svého vozu požaduje
            jistý komfort. Tento komfort se ale v balíčku Vašeho vozu bohužel
            nenachází. Po našich zkušenostech toto můžeme konstatovat i o
            prémiových automobilech. Proto je právě na nás, abychom se na tento
            neduh zaměřili a odstranili veškeré vrzání, praskání, rezonance a
            další hluk pronikající do kabiny. Toto vše právě negativně podtrhuje
            jízdní komfort a zvukovou akustiku vozu.
          </p>
        </ScrollReveal>
        <ScrollReveal smDelay="200" className="col-span-1">
          <Heading as={"h3"} size="lg" className="mb-6">
            Hudba jsou emoce
          </Heading>
          <p>
            Každá jízda ve voze přináší spolu s jeho ozvučením emoce, které mají
            vliv na Vaši náladu. Poslech oblíbených skladeb ve voze se základním
            ozvučením na Vaše emoce bohužel nijak pozitivně nepůsobí, spíše
            naopak. Vytváří pocity, díky kterým čtete tyto řádky. Tak to pojďme
            spolu změnit a vytvořit ve Vašem voze dokonalý zvukový zážitek na
            který bylo výrobci aut zapomenuto
          </p>
        </ScrollReveal>
      </div>
    </>
  );
}
