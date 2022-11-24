import CardColor from "@components/brand-identity/CardColor";
import CardLogo from "@components/brand-identity/CardLogo";
import HeroGlobal from "@components/HeroGlobal";
import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
// import CallToActionWide from "@ui/CallToActionWide";

const BrandIdentityPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Firemní identita"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />
      {/* Page Content... */}
      <HeroGlobal title="Firemní identita" variant="brand-identity" />

      <Wrapper
        as={"section"}
        id="vice"
        paddedContentTop="lg"
        paddedContentBottom="sm"
      >
        <Heading as={"h2"} size="xl" hasMarginBottom>
          Barvy
        </Heading>
        <p className="max-w-prose">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ipsam similique et unde possimus in nam, sequi explicabo excepturi
          sunt.
        </p>
        <div className="grid grid-cols-1 gap-10 py-16 xs:grid-cols-2 md:grid-cols-3">
          <CardColor hex="#FFA200" variant="primary" />
          <CardColor hex="#BD6705" variant="secondary" />
          <CardColor hex="#12121C" variant="body" hasBorder />
        </div>
      </Wrapper>

      <Wrapper
        as={"section"}
        id="vice"
        paddedContentTop="sm"
        paddedContentBottom="lg"
      >
        <Heading as={"h2"} size="xl" hasMarginBottom>
          Loga
        </Heading>
        <p className="max-w-prose">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          ipsam similique et unde possimus in nam, sequi explicabo excepturi
          sunt.
        </p>
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 py-16 md:grid-cols-2 md:gap-y-32">
          <CardLogo
            className="col-span-1"
            srcSvg="/brand/bestaudio_logo_horizontalni_digital_tmave_pozadi.svg"
            srcPng="/brand/bestaudio_logo_horizontalni_digital_tmave_pozadi.png"
            width={190}
            height={51}
            title="Logo Bestaudio - pro tmavé pozadí"
            caption="Lorem ipsum dolor sit amet"
            isUpScaled
            background="black"
          />
          <CardLogo
            className="col-span-1"
            srcSvg="/brand/bestaudio_logo_horizontalni_digital_svetle_pozadi.svg"
            srcPng="/brand/bestaudio_logo_horizontalni_digital_svetle_pozadi.png"
            width={190}
            height={51}
            title="Logo Bestaudio - pro světlé pozadí"
            caption="Lorem ipsum dolor sit amet"
            isUpScaled
            background="white"
          />
          <CardLogo
            className="col-span-1"
            srcSvg="/brand/bestaudio_symbol_digital_svetle_pozadi.svg"
            srcPng="/brand/bestaudio_symbol_digital_svetle_pozadi.png"
            width={140}
            height={218}
            title="Symbol Bestaudio"
            caption="Lorem ipsum dolor sit amet"
            isUpScaled
            background="black"
          />
        </div>
      </Wrapper>
    </>
  );
};

export default BrandIdentityPage;
