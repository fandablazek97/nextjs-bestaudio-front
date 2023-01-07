import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";

export default function HowItWorks() {
  return (
    <>
      <ScrollReveal>
        <Heading as={"h2"} size="xl" className="max-w-xl" color="primary">
          Jak vše probíhá?
        </Heading>
      </ScrollReveal>
      <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4">
        <ScrollReveal className="col-span-1">
          <Heading as={"span"} size="lg" className="mb-5 block" color="primary">
            1
          </Heading>
          <Heading as={"h3"} size="sm" className="mb-3">
            Prvotní kontakt
          </Heading>
          <p>
            Nejdřív nám prostřednictvím telefonu, nebo kontaktního formuláře
            sdělíte vaše požadavky a očekávání.
          </p>
        </ScrollReveal>
        <ScrollReveal smDelay="200" className="col-span-1">
          <Heading as={"span"} size="lg" className="mb-5 block" color="primary">
            2
          </Heading>
          <Heading as={"h3"} size="sm" className="mb-3">
            Nezávazná konzultace a řešení
          </Heading>
          <p>
            Na základě vašich požadavků vás kontaktuje náš zvukový specialista.
            Vše s vámi probere a najde vhodné řešení a způsob instalace pro váš
            vůz.
          </p>
        </ScrollReveal>
        <ScrollReveal lgDelay="400" className="col-span-1">
          <Heading as={"span"} size="lg" className="mb-5 block" color="primary">
            3
          </Heading>
          <Heading as={"h3"} size="sm" className="mb-3">
            Samotná instalace
          </Heading>
          <p>
            V dohodnutý termín přistavíte váš vůz do naší specializované
            montážní dílny, kde proběhne samotná instalace.
            <br />
            <span className="mt-2 block">
              Během instalace můžete trávit svůj čas v zázemí naší společnosti,
              nebo obdivovat krásy města Plzně.
            </span>
          </p>
        </ScrollReveal>
        <ScrollReveal smDelay="200" lgDelay="600" className="col-span-1">
          <Heading as={"span"} size="lg" className="mb-5 block" color="primary">
            4
          </Heading>
          <Heading as={"h3"} size="sm" className="mb-3">
            Předání a poslech
          </Heading>
          <p>
            Máme hotovo! Nyní už následuje jen poslech a doladění s naším
            zvukovým specialistou a převzetí vašeho vozu.
          </p>
        </ScrollReveal>
      </div>
    </>
  );
}
