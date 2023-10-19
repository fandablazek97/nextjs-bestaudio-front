import Button from "@ui/Button";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";

export default function Services() {
  return (
    <>
      <ScrollReveal>
        <Heading as={"h2"} size="xl" className="max-w-3xl" color="primary">
          Naše specializace
        </Heading>
      </ScrollReveal>
      <div className="mt-16 grid grid-cols-1 gap-y-14 gap-x-10 sm:mt-28 sm:grid-cols-2 lg:mt-40 lg:grid-cols-3 lg:gap-14">
        <ScrollReveal className="col-span-1 flex flex-col items-start gap-5">
          <Heading as={"h3"} size="md">
            Ozvučení automobilu
          </Heading>
          <p>
            Reproduktory a zesilovače dnešních moderních vozů hrají čím dál tím
            hůře. Je to dáno tím, že výrobci často volí nevhodné umístění,
            směrování a snaží se ušetřit. Jimi použité reproduktory ani v
            příplatkových verzích nejsou o moc kvalitnější nebo propracovanější
            než ty základní, zpravidla je zvýšen jen jejich počet a jsou
            doplněny o zesilovač s nízkým výkonem. To ale na celkový zážitek z
            poslechu nemá dobrý vliv. Pokud vám záleží na kvalitě zvuku, můžeme
            bez nadsázky tvrdit, že bez výměny reproduktorů a osazení výkonného
            zesilovače s DSP procesorem se neobejdete.
          </p>
          <Button href="/kontakt" as={"a"} variant="outlined" className="mt-5">
            Objednat
          </Button>
        </ScrollReveal>
        <ScrollReveal
          smDelay="200"
          className="col-span-1 flex flex-col items-start gap-5"
        >
          <Heading as={"h3"} size="md">
            Tlumení automobilu
          </Heading>
          <p>
            Nedílnou součástí každého vylepšení jak zvuku, tak komfortu je
            tlumení. Dnešní tlumící materiály prošly za pár let velkým vývojem a
            dokáží snížit hluk ve vozidle o několik decibelů. Pomáhají také pro
            lepší zvukový přednes tím, že zpevní materiál a basové vlny se od
            něj odrážejí do prostoru, místo aby byly pohlceny a materiál
            rezonoval.
          </p>
          <Button href="/kontakt" variant="outlined" className="mt-5">
            Objednat
          </Button>
        </ScrollReveal>
        <ScrollReveal
          lgDelay="400"
          className="col-span-1 flex flex-col items-start gap-5"
        >
          <Heading as={"h3"} size="md">
            Ladění automobilu
          </Heading>
          <p>
            Mnoho lidí má již ve svém vozidle zabudován zesilovač s DSP
            procesorem, který přidává opravdu nekonečné možnosti nastavení. Jeho
            správné nastavení však vyžaduje zkušenosti a školení, bez kterých
            může výsledný zvuk být i horší a nebo nevyužije potenciál vašeho
            zařízení na plno. Ať už je DSP instalováno kýmkoli, nabízíme možnost
            kontroly tohoto nastavení a při zjištění chyb jeho následné
            přeladění.
          </p>
          <Button href="/kontakt" variant="outlined" className="mt-5">
            Objednat
          </Button>
        </ScrollReveal>
      </div>
    </>
  );
}
