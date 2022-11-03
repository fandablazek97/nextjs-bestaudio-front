import type { NextPage } from "next";
import Hero from "@components/home/Hero";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import Aftermovie from "@components/home/Aftermovie";
import WhyBetterSound from "@components/home/WhyBetterSound";
import CarBrandsMarquee from "@components/home/CarBrandsMarquee";
import HowItWorks from "@components/home/HowItWorks";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import Testimonials from "@components/Testimonials";
import Team from "@components/home/Team";
import CallToActionWide from "@ui/CallToActionWide";

// ToDo
// ----------------------

// 01 - General
// Cookie consent podle gdpr 2022 (context api + cookies ??) 8h.
// Navbar - doladit - 1 hod
// Button - dodělat hover efekty přes props? - 3h
// Button - ripple effekt? ??
// Dodělat na komponenty focus-visible (třeba anchor) - 1h

// 02 - Pages
// Page: Index - Ukázka frameworku - 3h
// Page: Theme - Zobrazené komponenty pro snadnou úpravu šablony - 2h

// 03 - Components
// Components: Footer
// Components: Social Links and Icons - 1h
// Components: Avatar - 2h
// Components: Anchor (update) - 1.5h
// Components: Progress bar - 2h
// Components: Tooltip - 2h
// Components: Quote - 1h
// Components: Floating button (Fixed CTA - right bottom corner)
// Components Forms: Type Date - 1h
// Components Forms: Type Number - 2h
// Components Forms: File - 1h
// Components: Full contact form - 2h

// 04 - After some time
// doladit a začistit - 4h
// Až bude vše implementované, odladit rychlost, aby v page speed bylo skóre 100 / 100
// -> Možná přesun na preact/compact? (Vyzkoušet kvůli kompatibilitě)

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Děláme nejlepší zvuk v autě"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto impedit non ad?"
        noIndex={false}
        noFollow={false}
      />

      {/* Hero section */}
      <Hero />

      {/* Video */}
      <Wrapper size="lg">
        <Aftermovie />
      </Wrapper>

      {/* Proč chtít lepší zvuk v autě? */}
      <Wrapper paddedContentTop="lg" paddedContentBottom="md" className="mt-12">
        <WhyBetterSound />
      </Wrapper>

      {/* Co děláme za značky aut? */}
      <CarBrandsMarquee />

      {/* Jak to funguje? */}
      <Wrapper paddedContent="lg">
        <HowItWorks />
      </Wrapper>

      {/* Reference */}
      <Wrapper paddedContentTop="sm">
        <ScrollReveal>
          <Heading
            as={"h2"}
            size="xl"
            align="center"
            color="primary"
            className="mx-auto mb-20 sm:mb-32"
          >
            Reference
          </Heading>
        </ScrollReveal>
        <Testimonials />
      </Wrapper>

      {/* Náš tým */}
      <Wrapper paddedContent="sm">
        <Team />
      </Wrapper>

      {/* Call to action -> Kontakt */}
      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide />
      </Wrapper>
    </>
  );
};

export default Home;
