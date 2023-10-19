import PreHeading from "@ui/PreHeading";
import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import { HiHome } from "react-icons/hi2";
import Button from "@ui/Button";
import Image from "next/image";

const Page404: NextPage = () => {
  return (
    <>
      <Seo
        title="Stránka nenalezena"
        description="Stránka, kterou se pokoušíte nalézt již neexistuje, nebo byla přesunuta. Kliknutím na následující tlačítko se dostanete na hlavní stránku webu."
        noIndex={false}
        noFollow={false}
      />
      <div className="flex h-screen w-screen items-center justify-center">
        <Wrapper
          paddedContent="lg"
          className="relative flex flex-col items-center justify-center"
        >
          <Image
            src={"/images/particles/404.png"}
            alt="chyba 404"
            width={1675}
            height={561}
            aria-hidden={true}
            className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-auto w-full -translate-x-1/2 -translate-y-1/2 opacity-35"
          />
          <PreHeading align="center" hasMarginBottom>
            Chyba 404
          </PreHeading>
          <Heading as="h1" size="2xl" align="center" hasMarginBottom>
            Tato stránka neexistuje
          </Heading>
          <p className="max-w-prose text-center text-lg">
            Stránka, kterou se pokoušíte nalézt již neexistuje, nebo byla
            přesunuta. Kliknutím na následující tlačítko se dostanete na hlavní
            stránku webu.
          </p>
          <Button href="/" size="lg" leftIcon={<HiHome />} className="mt-16">
            Hlavní strana
          </Button>
        </Wrapper>
      </div>
    </>
  );
};

export default Page404;
