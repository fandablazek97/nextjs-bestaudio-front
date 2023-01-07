import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function CollabBrands({ className = "" }: Props) {
  return (
    <div className={`${className}`}>
      <ScrollReveal>
        <Heading
          as={"h2"}
          size="xl"
          align="center"
          color="primary"
          className="mx-auto"
        >
          Spolupráce s firmami
        </Heading>
      </ScrollReveal>
      <div className="grid grid-cols-4 gap-x-12 gap-y-5 pt-12 sm:gap-y-16 sm:pt-28 md:grid-cols-6">
        <ScrollReveal
          as="a"
          href="https://www.autasuper.com"
          target="_blank"
          rel="noopenner noreferrer"
          className="col-span-2 h-[104px] w-[348px] max-w-full cursor-pointer"
        >
          <img
            src="/partner-logos/auta-super.svg"
            alt="Logo značky"
            width="348"
            height="104"
            className="h-full w-full"
          />
        </ScrollReveal>
        <ScrollReveal
          as="a"
          href="https://acparizska.cz"
          target="_blank"
          rel="noopenner noreferrer"
          smDelay="200"
          className="col-span-2 h-[104px] w-[348px] max-w-full"
        >
          <Image
            src="/partner-logos/ac-parizska.png"
            alt="Autocentrum Pařížská"
            width="348"
            height="104"
            className="h-full w-full object-contain"
          />
        </ScrollReveal>
        <ScrollReveal
          as="a"
          href="https://unitesta.com/cs/"
          target="_blank"
          rel="noopenner noreferrer"
          mdDelay="400"
          className="col-span-2 h-[104px] w-[348px] max-w-full"
        >
          <img
            src="/partner-logos/unitesta.svg"
            alt="Unitesta"
            width="348"
            height="104"
            className="h-full w-full"
          />
        </ScrollReveal>
        <ScrollReveal
          as="a"
          href="https://www.invelt.com/?ppcbee-adtext-variant=ETA+-+varianta+3&gclid=Cj0KCQiAzeSdBhC4ARIsACj36uH0W_iLpGbKucCLpG6uQ_Z9wKpA8JKfnaGMuDrb7HsP5r-etS-UDfoaAsXNEALw_wcB"
          target="_blank"
          rel="noopenner noreferrer"
          smDelay="200"
          mdDelay="0"
          className="col-span-2 h-[104px] w-[348px] max-w-full md:col-start-2"
        >
          <img
            src="/partner-logos/bmw-invelt.svg"
            alt="BMW invelt Plzeň"
            width="348"
            height="104"
            className="h-full w-full"
          />
        </ScrollReveal>
        <ScrollReveal
          as="a"
          href="https://www.renocar.cz"
          target="_blank"
          rel="noopenner noreferrer"
          mdDelay="200"
          className="col-span-2 col-start-2 h-[104px] w-[348px] max-w-full md:col-start-4 md:col-end-6"
        >
          <img
            src="/partner-logos/renocar.svg"
            alt="Renocar"
            width="348"
            height="104"
            className="h-full w-full"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
