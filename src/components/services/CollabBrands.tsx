import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";

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
      <div className="grid grid-cols-4 gap-x-12 gap-y-20 pt-36 md:grid-cols-6">
        <ScrollReveal className="col-span-2 h-[104px] w-[348px] max-w-full">
          <img
            src="/svg/bestaudio_logo_horizontalni_digital_tmave_pozadi.svg"
            alt="Logo značky"
            width="348"
            height="104"
            className="h-full w-full"
          />
        </ScrollReveal>
        <ScrollReveal
          smDelay="200"
          className="col-span-2 h-[104px] w-[348px] max-w-full"
        >
          <img
            src="/svg/bestaudio_logo_horizontalni_digital_tmave_pozadi.svg"
            alt="Logo značky"
            width="348"
            height="104"
            className="h-full w-full"
          />
        </ScrollReveal>
        <ScrollReveal
          mdDelay="400"
          className="col-span-2 h-[104px] w-[348px] max-w-full"
        >
          <img
            src="/svg/bestaudio_logo_horizontalni_digital_tmave_pozadi.svg"
            alt="Logo značky"
            width="348"
            height="104"
            className="h-full w-full"
          />
        </ScrollReveal>
        <ScrollReveal
          smDelay="200"
          mdDelay="0"
          className="col-span-2 h-[104px] w-[348px] max-w-full md:col-start-2"
        >
          <img
            src="/svg/bestaudio_logo_horizontalni_digital_tmave_pozadi.svg"
            alt="Logo značky"
            width="348"
            height="104"
            className="h-full w-full"
          />
        </ScrollReveal>
        <ScrollReveal
          mdDelay="200"
          className="col-span-2 col-start-2 h-[104px] w-[348px] max-w-full md:col-start-4 md:col-end-6"
        >
          <img
            src="/svg/bestaudio_logo_horizontalni_digital_tmave_pozadi.svg"
            alt="Logo značky"
            width="348"
            height="104"
            className="h-full w-full"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
