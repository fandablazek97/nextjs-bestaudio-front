import GdprPolicy from "@components/gdpr/GdprPolicy";
import ContentFormater from "@ui/ContentFormater";
import Seo from "@ui/Seo";
import type { NextPage } from "next";
import Wrapper from "@ui/Wrapper";
import Heading from "@ui/Heading";
import { config } from "@configs/site-config";
import Image from "next/image";

const GdprPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Zpracování osobních údajů"
        description="Page description"
        noIndex={true}
        noFollow={true}
      />
      {/* Page Content... */}
      <Wrapper paddedContent="lg" className="relative">
        <Image
          src={"/images/particles/eu-stars.png"}
          alt="Eu symbol"
          width={640}
          height={640}
          aria-hidden={true}
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-full w-auto max-w-[90vw] origin-center -translate-x-1/2 -translate-y-1/2 scale-90 object-contain opacity-35"
        />
        <Heading as="h1" size="2xl" align="center" className="mx-auto pt-12">
          Zpracování osobních údajů
        </Heading>
      </Wrapper>
      <ContentFormater>
        <GdprPolicy
          responsibleSubject={config.legal.company.name}
          subjectAdress={config.legal.company.adress}
          subjectIdentificationNumber={config.legal.company.ic}
          subjectEmail={config.legal.company.email}
          subjectPhone={config.legal.company.phone}
          hostingProvider={config.legal.providers.hostingProvider}
          emailProvider={config.legal.providers.emailProvider}
          websiteAdministrator={config.legal.providers.websiteAdministrator}
          takesEffectDate={config.legal.websiteLaunchDate}
          lastDocumentUpdate="1.11. 2022"
        />
      </ContentFormater>
    </>
  );
};

export default GdprPage;
