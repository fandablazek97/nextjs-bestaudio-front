import Button from "@ui/Button";
import CarBrand from "@components/CarBrand";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import Wrapper from "@ui/Wrapper";
import Marquee from "react-fast-marquee";
import { cars } from "@configs/car-brands";
import AppLink from "@ui/AppLink";
import Image from "next/image";

export default function CarBrandsMarquee() {
  return (
    <div className="relative">
      <Wrapper paddedContentTop="lg" paddedContentBottom="sm">
        <Image
          src={"/images/particles/particles-shell.png"}
          alt="xxx"
          width={1920}
          height={1920}
          aria-hidden={true}
          className="pointer-events-none absolute left-0 top-0 -z-10 aspect-square h-auto w-screen origin-center translate-y-1/3 scale-[2.25] opacity-20 sm:translate-y-0 sm:scale-150 md:translate-y-[-10%] md:scale-110 xl:left-1/2 xl:max-w-[1728px] xl:translate-y-[-15%] xl:-translate-x-1/2 xl:scale-110"
        />
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
          className="mx-auto mt-8 flex max-w-sm flex-col items-center justify-center gap-5 sm:max-w-xl sm:flex-row sm:gap-10 lg:mt-12"
        >
          <AppLink href="/sluzby" passHref>
            <Button className="w-full">Zobrazit služby</Button>
          </AppLink>
          <Button
            as={"a"}
            href="#reference"
            variant="outlined"
            color="light"
            className="w-full"
          >
            Zobrazit reference
          </Button>
        </ScrollReveal>
      </Wrapper>
      <Marquee
        gradient={false}
        speed={50}
        direction={"left"}
        className="my-6 sm:my-12"
      >
        {cars
          .filter((car, i) => i < 12)
          .map((car, i) => (
            <CarBrand
              key={i}
              src={car.src}
              name={car.name}
              className="mx-2 sm:mx-6 lg:mx-8 2xl:mx-10"
            />
          ))}
      </Marquee>
      <Marquee
        gradient={false}
        speed={50}
        direction={"right"}
        className="my-6 sm:my-12"
      >
        {cars
          .filter((car, i) => i > 12 && i < 24)
          .map((car, i) => (
            <CarBrand
              key={i}
              src={car.src}
              name={car.name}
              className="mx-2 sm:mx-6 lg:mx-8 2xl:mx-10"
            />
          ))}
      </Marquee>
      <Marquee
        gradient={false}
        speed={50}
        direction={"left"}
        className="my-6 sm:my-12"
      >
        {cars
          .filter((car, i) => i > 24 && i < 37)
          .map((car, i) => (
            <CarBrand
              key={i}
              src={car.src}
              name={car.name}
              className="mx-2 sm:mx-6 lg:mx-8 2xl:mx-10"
            />
          ))}
      </Marquee>
    </div>
  );
}
