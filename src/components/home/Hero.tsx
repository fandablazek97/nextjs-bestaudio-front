import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";

export default function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[540px] w-screen md:min-h-[768px] lg:h-[90vh]">
      {/* <div className="animate-hero-custom pointer-events-none absolute top-0 left-0 -z-10 h-full w-full origin-center">
      </div> */}
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
