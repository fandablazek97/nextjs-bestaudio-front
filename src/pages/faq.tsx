import CallToActionWide from "@ui/CallToActionWide";
import Heading from "@ui/Heading";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import AppLink from "@ui/AppLink";
// import Accordion from "@ui/Accordion";

const Faq: NextPage = () => {
  return (
    <>
      <Seo
        title="FAQ"
        description="V této části jsou odpovědi na nejčastější otázky, které vás zajímají. Pokud nenajdete vaši otázku, kontaktujte nás."
        noIndex={false}
        noFollow={false}
      />

      <HeroGlobal
        title="FAQ"
        variant={"faq"}
        perex="V této části jsou odpovědi na nejčastější otázky, které vás zajímají. Pokud nenajdete vaši otázku, kontaktujte nás."
      />

      {/* Úvodní sekce */}
      <Wrapper
        as={"section"}
        paddedContentTop="lg"
        paddedContentBottom="sm"
        id="vice"
      >
        <Heading as={"h2"} size="xl" color="primary">
          Co vás nejčastěji zajímá
        </Heading>
      </Wrapper>

      {/* Hlavní otázky */}
      <Wrapper
        paddedContentTop="sm"
        paddedContentBottom="md"
        className="grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2"
      >
        <div className="col-span-1 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Je nutné, aby navrhovaný set instaloval vždy odborník?
            </Heading>
            <p>
              Vždy doporučujeme využít kvalifikovanou montážní dílnu. Nicméně se
              snažíme navrhovat sety tak, aby jejich montáž nebyla nijak
              obtížná. Stačí jen trocha zručnosti a využití jednoduchých
              nástrojů. Každý technik, který s automobily pracuje, by měl být
              schopný montáž zcela bez problémů provést.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Kde probíhá instalace?
            </Heading>
            <p>
              Instalace probíhá u nás v montážní dílně v Plzni, Pařížská 10.{" "}
              <br /> Viz{" "}
              <AppLink
                href="/kontakt#kudy-k-nam"
                hoverEffect="underline-slide"
                className="text-primary"
              >
                stránka kontaktu.
              </AppLink>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Mám auto na leasing, kde nesmí být provedeny žádné zásahy do vozu.
              Jaké jsou možnosti?
            </Heading>
            <p>
              Veškeré připojení je provedeno přes kompatibilní konektory a do
              elektroinstalace auta se nijak nezasahuje. Není nutné žádné vrtání
              či narušení elektroinstalace nebo jiná úprava částí vozu.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Ovlivňuje audio systém nějaké další systémy ve voze nebo vybíjení
              baterie?
            </Heading>
            <p>
              Instalované komponenty nijak nenaruší existující CAN nebo MOST
              systémy ve voze ani nijak neovlivňují nadměrné vybíjení baterie
              při jízdě. Nicméně pro hlasitý poslech, když vozidlo stojí
              doporučujeme nechat nastartovaný motor.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Mohu zachovat originální autorádio?
            </Heading>
            <p>
              V dnešní době se téměř vždy počítá s tím, že využijeme originální
              Head unit neboli autorádio. U většiny moderních aut se pomocí
              rádia ovládají důležité funkce vozu a jeho nastavení. Z tohoto
              důvodu je jeho zachování téměř nezbytné.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Ovlivňuje instalace systému záruku nového vozu?
            </Heading>
            <p>
              Veškeré komponenty jsou vybírány s ohledem na nulový zásah do
              originální kabeláže vozu, záruka nového vozu tak není ohrožena.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Co je DSP procesor?
            </Heading>
            <p>
              DSP (DIGITAL SIGNAL PROCESOR) je zařízení, které umožní extrémně
              detailní nastavení zvuku s maximální možnou přesností. Představme
              si, že originální autorádio s nastavením basů a výšek umožní
              několik málo kombinací nastavení zvuku. S DSP procesorem je na
              výběr nastavení 31 pásem ekvalizéru a milióny kombinací a
              možností.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Jak probíhá odladění a jaká je jeho časová náročnost?
            </Heading>
            <p>
              Odladění probíhá ve dvou fázích. První fází je kompletní naladění
              celého systému naším specializovaným technikem. V této fázi se
              provede celková ekvalizace a nastavení časových korekcí. Druhá
              fáze probíhá už se zákazníkem, kde se doupraví nastavení přímo dle
              požadavků zákazníka. Časová náročnost se odvíjí od náročnosti
              instalace a zapojení. Standardně kolem dvou hodin.
            </p>
          </div>
        </div>
      </Wrapper>

      {/* Další otázky */}
      {/* <Wrapper
        paddedContent="sm"
        className="grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2"
      >
        <div className="col-span-1 flex flex-col divide-y divide-copy-rich/15">
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
        </div>
        <div className="col-span-1 flex flex-col divide-y divide-copy-rich/15">
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
        </div>
      </Wrapper> */}

      {/* Call to action -> Kontakt */}
      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide content="Naši specialisté s Vámi proberou vhodné řešení, prodiskutují cenu a najdou nejbližší možný termín realizace." />
      </Wrapper>
    </>
  );
};

export default Faq;
