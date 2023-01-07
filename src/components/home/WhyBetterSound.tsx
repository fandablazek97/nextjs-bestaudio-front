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
      <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 lg:mt-32 lg:gap-14">
        <ScrollReveal className="col-span-1">
          <Heading as={"h3"} size="lg" className="mb-6">
            Komfort na prvním místě a rezonance jsou nežádoucí
          </Heading>
          <p>
            Výmoly, jízda po kostkách, nebo jen obyčejná jízda po dálnici
            &bdquo;stotřicítkou&rdquo; – ve všech situacích očekáváme od svého
            vozu jistou úroveň komfortu. V drtivé většině případů se ale o
            komfortě nedá vůbec bavit. Po našich zkušenostech toto můžeme
            konstatovat i o některých prémiových automobilech. (A pokud si
            myslíte že ano, přijďte si někdy vyzkoušet, jaké to je jet
            vytlumeným autem od nás)
            <br />
            <br />
            Za použití moderních tlumících materiálů odstraníme veškeré vrzání,
            praskání, rezonance a další hluk pronikající do kabiny.
          </p>
        </ScrollReveal>
        <ScrollReveal smDelay="200" className="col-span-1">
          <Heading as={"h3"} size="lg" className="mb-6">
            Hudba jsou emoce
          </Heading>
          <p>
            V průměru prožijeme v autě přes 4 roky života. Každá jízda ovlivňuje
            naši náladu a vzbuzuje v nás emoce. Nejen proto je důležité
            přemýšlet nad tím, jak si čas na cestě zpříjemnit. V době, kdy se v
            autech šetří na všem možném vám základní audiosystém náladu zlepší
            jen těžko. Pojďme to změnit. Společně vytvoříme dokonalý zvukový
            zážitek a z rutinních cest uděláme malé radosti, na které se budete
            každý den těšit.
          </p>
        </ScrollReveal>
      </div>
    </>
  );
}
