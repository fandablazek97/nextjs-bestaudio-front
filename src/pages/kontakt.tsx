import ContactForm from "@components/contact/ContactForm";
import HeroContact from "@components/contact/HeroContact";
import LeadershipContacts from "@components/contact/LeadershipContacts";
import MapAdress from "@components/contact/MapAdress";
import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import { config } from "@configs/site-config";

const KontaktPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Kontakt"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />

      {/* Hero */}
      <HeroContact />

      {/* Důležité osoby */}
      <Wrapper
        as={"section"}
        id="vice"
        paddedContentTop="lg"
        paddedContentBottom="md"
      >
        <LeadershipContacts />
      </Wrapper>

      <Wrapper paddedContent="md">
        <Heading as={"h2"} size="xl" color="primary">
          Máte dotaz?
        </Heading>
        <div className="grid w-full grid-cols-1 gap-20 pt-12 lg:grid-cols-3 lg:pt-20 xl:gap-24">
          <div className="col-span-1 lg:col-span-2">
            <ContactForm />
          </div>
          <div id="firemni-udaje" className="col-span-1">
            <Heading as={"h3"} size="lg" hasMarginBottom>
              Firemní údaje
            </Heading>
            <ul role={"list"} className="flex flex-col space-y-3">
              <li>{config.legal.company.name}</li>
              <li>Adresa: {config.legal.company.adress}</li>
              <li>IČ: {config.legal.company.ic}</li>
              <li>DIČ: {config.legal.company.dic}</li>
            </ul>
          </div>
        </div>
      </Wrapper>

      <MapAdress />

      {/* ??? Doplnit fakturační údaje ??? */}
    </>
  );
};

export default KontaktPage;
