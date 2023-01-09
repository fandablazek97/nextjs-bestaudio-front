import { TeamMemberCard } from "@components/about/TeamMemberCard";
import CallToAction from "@ui/CallToAction";
import Heading from "@ui/Heading";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import { team } from "@configs/team";
import Image from "next/image";

const ONas: NextPage = () => {
  return (
    <>
      <Seo
        title="O nás"
        description="Jsme tým certifikovaných profesionálů s proklientským přístupem ozvučíme vám auto, aniž bychom zasahovali do interiéru vašeho vozu."
        noIndex={false}
        noFollow={false}
      />

      <HeroGlobal
        title="O nás"
        perex="Jsme parta mladých nadšenců do hi-fi. Žijeme naší prací, která je pro nás i koníčkem a (nejen) díky tomu dlouhodobě dosahujeme skvělých výsledků a realizujeme prvotřídní montáže na světové úrovni."
      />

      <Wrapper as={"section"} id="vice" paddedContent="lg">
        <Heading as={"h2"} size="xl" color="primary">
          Poznejte Bestaudio
        </Heading>
        <div className="mt-12 grid w-full grid-cols-1 gap-12 md:mt-28 md:grid-cols-2">
          <p className="col-span-1">
            Dvacet let se zabýváme špičkovým ozvučením vozů. Máme za sebou
            stovky montáží. Posouváme limity toho, co je možné. Stále hledáme
            nová originální řešení a učíme se nové věci. Přinášíme vám to
            nejlepší ve všech cenových hladinách. Jsme Bestaudio. Ozvučujeme a
            odhlučňujeme auta.
          </p>
          <p className="col-span-1">
            Díky našim zkušenostem nás oslovují nejen zákazníci ale také přímo
            prodejci nových automobilů jako například prodejce amerických vozů
            Unitesta, BMW Renocar či AutaSuper. Jsme oficiálním distributorem
            některých předních výrobců high-end komponent a spolupracujeme s
            nimi na jejich zdokonalování.
          </p>
        </div>
      </Wrapper>

      <Wrapper size="lg">
        <div className="grayscale-toned-image aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={"/images/team/team-group-photo.jpg"}
            alt="skupinová fotky"
            width={2121}
            height={1414}
            className="w-full bg-body-200 object-contain object-center"
          />
        </div>
      </Wrapper>

      <Wrapper paddedContent="lg">
        <Heading as={"h2"} size="xl" color="primary">
          Náš tým
        </Heading>
        <div className="mt-12 grid w-full grid-cols-1 gap-x-10 gap-y-10 md:mt-28 lg:grid-cols-2 lg:gap-y-16 xl:gap-x-16 xl:gap-y-24">
          {team.map((member, i) => (
            <TeamMemberCard
              key={i}
              imageSrc={member.src}
              name={member.name}
              position={member.position}
              content={member.content.long}
              className="col-span-1"
            />
          ))}
        </div>
      </Wrapper>

      {/* CTAs */}
      <Wrapper size="lg" paddedContentTop="sm" paddedContentBottom="lg">
        <Heading
          as={"h2"}
          size="2xl"
          align="center"
          className="mx-auto mb-10 sm:mb-16"
        >
          Kam dál?
        </Heading>
        <div className="grid w-full grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
          <CallToAction
            content="Naši specialisté s Vámi proberou vhodné řešení, prodiskutují cenu a najdou nejbližší možný termín realizace."
            className="col-span-1"
          />
          <CallToAction
            href="/nase-prace"
            preHeading="Jak to vypadá v praxi?"
            heading="Případové studie"
            content="Prohlédněte si naše již realizované montáže ve kterých naleznete i svůj vůz, tuto databázi postupně rozšiřujeme a doplňujeme"
            button="Zobrazit naší práci"
            className="col-span-1"
          />
        </div>
      </Wrapper>
    </>
  );
};

export default ONas;
