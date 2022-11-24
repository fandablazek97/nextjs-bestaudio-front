import ContentFormater from "@ui/ContentFormater";
import Seo from "@ui/Seo";
import type { NextPage } from "next";
import Wrapper from "@ui/Wrapper";
import Heading from "@ui/Heading";
import CookiesPolicy from "@components/cookies/CookiesPolicy";
import { config } from "@configs/site-config";
import Image from "next/image";

const CookiesPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Zpracování souborů cookies"
        description="Page description"
        noIndex={true}
        noFollow={true}
      />
      {/* Page Content... */}
      <Wrapper paddedContent="lg" className="relative">
        <Image
          src={"/images/particles/cookie.png"}
          alt="cookies symbol"
          width={659}
          height={660}
          aria-hidden={true}
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-full w-auto max-w-[90vw] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.60] object-contain opacity-35"
        />
        <Heading as="h1" size="2xl" align="center" className="mx-auto pt-12">
          Zpracování souborů cookies
        </Heading>
      </Wrapper>
      <ContentFormater>
        <CookiesPolicy
          domain={config.seo.url}
          responsibleSubject={config.legal.company.name}
          subjectAdress={config.legal.company.adress}
          subjectIdentificationNumber={config.legal.company.ic}
          validConsentPeriod={config.legal.cookies.validConsentPeriod}
          preferencesCookies={config.legal.cookies.preferencesCookies}
          statisticCookies={config.legal.cookies.statisticCookies}
          marketingCookies={config.legal.cookies.marketingCookies}
          thirdPartyCookies={config.legal.cookies.thirdPartyCookies}
          lastDocumentUpdate="1.11. 2022"
        />
      </ContentFormater>
    </>
  );
};

export default CookiesPage;
