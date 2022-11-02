import CallToActionWide from "@ui/CallToActionWide";
import Heading from "@ui/Heading";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import Testimonials from "@components/Testimonials";
import CaseStudies from "@components/our-work/CaseStudies";
import CaseStudyCard from "@components/our-work/CaseStudyCard";
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

      <HeroGlobal title="Naše práce" />

      {/* Příspěvky z případových studií */}
      <Wrapper paddedContentTop="sm" paddedContentBottom="md">
        <CaseStudies>
          <CaseStudyCard href="/nase-prace/detail" className="col-span-1" />
          <CaseStudyCard href="/nase-prace/detail" className="col-span-1" />
          <CaseStudyCard href="/nase-prace/detail" className="col-span-1" />
          <CaseStudyCard href="/nase-prace/detail" className="col-span-1" />
          <CaseStudyCard href="/nase-prace/detail" className="col-span-1" />
          <CaseStudyCard href="/nase-prace/detail" className="col-span-1" />
          <CaseStudyCard href="/nase-prace/detail" className="col-span-1" />
          <CaseStudyCard href="/nase-prace/detail" className="col-span-1" />
          <CaseStudyCard href="/nase-prace/detail" className="col-span-1" />
        </CaseStudies>
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
