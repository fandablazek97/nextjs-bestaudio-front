import CallToAction from "@ui/CallToAction";
import Heading from "@ui/Heading";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import CarBrandsEshop from "@components/services/CarBrandsEshop";
import CollabBrands from "@components/services/CollabBrands";
import PriceTables from "@components/services/PriceTables";
import Services from "@components/services/Services";
import Testimonials from "@components/Testimonials";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";

const Sluzby: NextPage = () => {
  return (
    <>
      <Seo
        title="Služby"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />

      <HeroGlobal
        title="Služby"
        hasScene
        position={[0, 80, 0]}
        count={180}
        a={3.75}
        gap={2.5}
        fov={90}
      />

      {/* Seznam služeb */}
      <Wrapper
        as={"section"}
        id="vice"
        paddedContentTop="lg"
        paddedContentBottom="md"
      >
        <Services />
      </Wrapper>

      {/* Seznam značek + odkazy na e-shop */}
      <div className="relative overflow-x-clip">
        <Wrapper paddedContent="md">
          <CarBrandsEshop />
        </Wrapper>
      </div>

      {/* Balíčky */}
      <Wrapper paddedContent="md">
        <PriceTables />
      </Wrapper>

      {/* Spolupráce s firmami */}
      <Wrapper paddedContent="md">
        <CollabBrands />
      </Wrapper>

      {/* Reference */}
      <Wrapper paddedContentTop="md">
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
          <CallToAction className="col-span-1" />
          <CallToAction
            href="/nase-prace"
            preHeading="Jak to vypadá v praxi?"
            heading="Případové studie"
            button="Zobrazit naší práci"
            className="col-span-1"
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Sluzby;
