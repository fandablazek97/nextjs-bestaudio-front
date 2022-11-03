import CarBrand from "@components/CarBrand";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import { cars } from "@configs/car-brands";

export default function CarBrandsEshop() {
  return (
    <>
      <ScrollReveal
        staggerChildren
        staggerChildrenIncrement="200"
        className="flex flex-col items-start justify-start gap-8 lg:flex-row lg:justify-between lg:gap-12"
      >
        <Heading as={"h2"} size="xl" className="max-w-xl" color="primary">
          Co děláme za značky?
        </Heading>
        <p className="max-w-xl lg:ml-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          quibusdam nihil delectus dolore cumque iure corporis repellendus
          tempora vero labore.
        </p>
      </ScrollReveal>
      <div className="mt-20 grid grid-cols-2 gap-5 xs:grid-cols-3 md:grid-cols-4 lg:mt-28 lg:gap-10 xl:grid-cols-6">
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
    </>
  );
}
