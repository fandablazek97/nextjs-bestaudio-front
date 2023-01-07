import type { NextPage } from "next";
import Hero from "@components/home/Hero";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import Video from "@components/home/Video";
import WhyBetterSound from "@components/home/WhyBetterSound";
import CarBrandsMarquee from "@components/home/CarBrandsMarquee";
import HowItWorks from "@components/home/HowItWorks";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import Testimonials from "@components/Testimonials";
import Team from "@components/home/Team";
import CallToActionWide from "@ui/CallToActionWide";

// To Do
// Animace úvodní stránky při prvním loadu (Animace textu a kamery v partiklech)
// Statické partikly - přidat
// Zapnout strict mod
// Cookie lišta
// Zprovoznit formulář
// Prolinkovat sociální sítě
// Finální content

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
      <Wrapper as={"section"} size="lg">
        <Video />
      </Wrapper>

      {/* Proč chtít lepší zvuk v autě? */}
      <Wrapper
        as={"section"}
        paddedContentTop="lg"
        paddedContentBottom="md"
        className="mt-12"
      >
        <WhyBetterSound />
      </Wrapper>

      {/* Co děláme za značky aut? */}
      <CarBrandsMarquee />

      {/* Jak to funguje? */}
      <Wrapper as={"section"} paddedContent="lg">
        <HowItWorks />
      </Wrapper>

      {/* Reference */}
      <Wrapper as={"section"} id="reference" paddedContentTop="sm">
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
      <Wrapper as={"section"} paddedContent="sm">
        <Team />
      </Wrapper>

      {/* Call to action -> Kontakt */}
      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide content="Naši specialisté s Vámi proberou vhodné řešení, prodiskutují cenu a najdou nejbližší možný termín realizace." />
      </Wrapper>
    </>
  );
};

export default Home;
