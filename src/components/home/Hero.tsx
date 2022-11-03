import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";
import ParticlesBackground from "@components/ParticlesBackground";

export default function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[540px] w-screen md:min-h-[768px] lg:h-[90vh]">
      <ParticlesBackground className="-z-10 opacity-20" />
      <Wrapper
        as={"header"}
        className="flex h-full flex-col items-center justify-center"
      >
        <Heading as={"h1"} size="3xl" align="center">
          Děláme nejlepší <br className="hidden sm:block" /> zvuk v autě
        </Heading>
        <p className="mx-auto mt-12 max-w-xl text-center text-base font-medium md:text-lg lg:mt-28 lg:ml-auto lg:mr-0 lg:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque totam
          dolor magnam esse perspiciatis facere, nam quae quos? Quas reiciendis
          minus, illum molestiae tempora earum?
        </p>
      </Wrapper>
    </div>
  );
}
