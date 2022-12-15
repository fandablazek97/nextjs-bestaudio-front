import CallToActionWide from "@ui/CallToActionWide";
import Heading from "@ui/Heading";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import Testimonials from "@components/Testimonials";
import CaseStudies from "@components/our-work/CaseStudies";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";

const NasePrace: NextPage = () => {
  return (
    <>
      <Seo
        title="Naše práce"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />

      <HeroGlobal
        title="Naše práce"
        hasScene
        position={[25, -50, 15]}
        tSpeed={35}
        count={180}
        gap={2.5}
        fov={105}
      />

      {/* Příspěvky z případových studií */}
      <Wrapper
        as={"section"}
        id="vice"
        paddedContentTop="lg"
        paddedContentBottom="md"
      >
        <CaseStudies />
      </Wrapper>

      {/* Reference */}
      <Wrapper paddedContentTop="sm">
        <Heading
          as={"h2"}
          size="xl"
          align="center"
          color="primary"
          className="mx-auto mb-20 sm:mb-32"
        >
          Reference
        </Heading>
        <Testimonials />
      </Wrapper>

      {/* Call to action -> Kontakt */}
      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide />
      </Wrapper>
    </>
  );
};

export default NasePrace;
