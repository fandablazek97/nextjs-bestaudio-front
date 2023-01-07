import CarBrand from "@components/CarBrand";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import { cars } from "@configs/car-brands";
import Image from "next/image";

export default function CarBrandsEshop() {
  return (
    <div>
      <Image
        src={"/images/particles/particles-shell-2.png"}
        alt="částice na pozadí"
        width={2128}
        height={2129}
        loading={"eager"}
        aria-hidden={true}
        className="pointer-events-none absolute left-0 top-1/2 -z-10 aspect-square h-auto w-screen origin-center -translate-x-1/2 -translate-y-1/2 scale-[3.75] opacity-20 sm:-translate-y-1/3 sm:scale-[2.25] sm:opacity-15 md:-translate-y-1/2 md:-translate-x-1/2 md:-rotate-90 md:scale-150 xl:left-0 xl:max-w-[1728px] xl:translate-y-[-15%] xl:scale-110 2xl:scale-125"
      />
      <ScrollReveal
        staggerChildren
        staggerChildrenIncrement="200"
        className="flex flex-col items-start justify-start gap-8 lg:flex-row lg:justify-between lg:gap-12"
      >
        <Heading as={"h2"} size="xl" className="max-w-xl" color="primary">
          Co děláme za značky?
        </Heading>
        <p className="max-w-xl lg:ml-auto">
          Díky našim dvacetiletým zkušenostem se nebojíme pustit do jakékoli
          montáže od jakéhokoli výrobce. Ať už to jsou prémiové, nebo běžné
          značky.
        </p>
      </ScrollReveal>
      <div className="mt-20 grid grid-cols-3 gap-5 md:grid-cols-4 lg:mt-28 lg:gap-10 xl:grid-cols-6">
        {cars.map((car) => (
          <CarBrand
            key={car.name}
            isLink
            href={car.href}
            src={car.src}
            name={car.name}
            className="col-span-1"
          />
        ))}
      </div>
    </div>
  );
}
