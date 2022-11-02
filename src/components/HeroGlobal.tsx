import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";

type HeroGlobalProps = {
  title?: string;
  perex?: string;
  cta?: string;
};

export default function HeroGlobal({
  title = "Lorem ipsum dolor",
  perex = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque totam dolor magnam esse perspiciatis facere, nam quae quos? Quas reiciendis minus, illum molestiae tempora earum?",
  cta = "Zjistit více",
}: HeroGlobalProps) {
  // Logic goes here
  return (
    <div className="relative h-[87vh] max-h-[960px] min-h-[540px] w-screen md:min-h-[768px]">
      <Wrapper
        as={"header"}
        className="flex h-full flex-col items-center justify-center pt-12"
      >
        <Heading as={"h1"} size="3xl" align="center">
          {title}
        </Heading>
        <div className="mt-8 flex w-full flex-col lg:mt-28 lg:flex-row-reverse 2xl:mt-48">
          <p className="mx-auto max-w-xl text-center text-base font-medium md:text-lg lg:mr-0 lg:ml-auto lg:text-left">
            {perex}
          </p>

          <div className="mx-auto mt-28 flex flex-col items-center justify-center lg:mr-auto lg:ml-0 lg:mt-0 lg:items-start">
            <span className="block font-display text-xl font-semibold">
              {cta}
            </span>
            <div className="animate-scroll mt-7 flex items-end justify-center lg:mt-3 lg:animate-none">
              <span className="h-24 w-0.5 rounded-full bg-primary" />
              <span className="h-4 w-0.5 origin-bottom -translate-x-0.5 rotate-45 rounded-full bg-primary" />
              <span className="h-4 w-0.5 origin-bottom -translate-x-1 -rotate-45 rounded-full bg-primary" />
            </div>
            {/* <HiArrowDown className="mt-8 text-3xl text-primary" /> */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
