import ContactForm from "@components/contact/ContactForm";
import HeroContact from "@components/contact/HeroContact";
import LeadershipContacts from "@components/contact/LeadershipContacts";
import MapAdress from "@components/contact/MapAdress";
import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";

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
      <Wrapper paddedContentTop="sm" paddedContentBottom="md">
        <LeadershipContacts />
      </Wrapper>

      <Wrapper paddedContent="md">
        <Heading as={"h2"} size="xl" color="primary">
          Máte dotaz?
        </Heading>
        <div className="max-w-4xl pt-24">
          <ContactForm />
        </div>
      </Wrapper>

      <MapAdress />

      {/* ??? Doplnit fakturační údaje ??? */}
    </>
  );
};

export default KontaktPage;
