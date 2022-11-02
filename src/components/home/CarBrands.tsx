import Button from "@ui/Button";
import CarBrand from "@components/CarBrand";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import Wrapper from "@ui/Wrapper";
import Marquee from "react-fast-marquee";

export default function CarBrands() {
  return (
    <>
      <Wrapper paddedContentTop="lg" paddedContentBottom="sm">
        <ScrollReveal>
          <Heading
            as={"h2"}
            size="xl"
            align="center"
            className="mx-auto"
            color="primary"
          >
            Co děláme za značky?
          </Heading>
        </ScrollReveal>
        <ScrollReveal
          delay="200"
          className="mx-auto mt-8 flex max-w-sm flex-col items-center justify-center gap-5 sm:max-w-xl sm:flex-row lg:mt-12"
        >
          <Button variant="outlined" className="w-full">
            Zobrazit služby
          </Button>
          <Button color="neutral" className="w-full">
            Zobrazit reference
          </Button>
        </ScrollReveal>
      </Wrapper>
      <Marquee
        gradient={false}
        speed={50}
        direction={"left"}
        className="my-4 sm:my-8"
      >
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
      </Marquee>
      <Marquee
        gradient={false}
        speed={50}
        direction={"right"}
        className="my-4 sm:my-8"
      >
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
      </Marquee>
      <Marquee
        gradient={false}
        speed={50}
        direction={"left"}
        className="my-4 sm:my-8"
      >
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
        <CarBrand className="mx-4 sm:mx-6 lg:mx-8 2xl:mx-10" />
      </Marquee>
    </>
  );
}
