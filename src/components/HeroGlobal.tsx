import { Suspense } from "react";
import dynamic from "next/dynamic";
import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";
import Spinner from "@ui/Spinner";
// import Scene from "@components/Scene";

const DynamicScene = dynamic(() => import("../components/Scene"), {
  suspense: true,
});

type HeroGlobalProps = {
  title?: string;
  perex?: string;
  cta?: string;
  // bgSvgSrc?: string | null;
  // Scene props
  hasScene?: boolean;
  position?: [number, number, number];
  fov?: number;
  t?: number;
  f?: number;
  a?: number;
  count?: number;
  gap?: number;
  tSpeed?: number;
};

export default function HeroGlobal({
  title = "Lorem ipsum dolor",
  perex = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque totam dolor magnam esse perspiciatis facere, nam quae quos? Quas reiciendis minus, illum molestiae tempora earum?",
  cta = "Zjistit více",
  // bgSvgSrc = null,
  // Scene props
  hasScene = false,
  position = [100, 10, 10],
  fov = 75,
  t = 0,
  f = 0.0025,
  a = 3,
  count = 120,
  gap = 3,
  tSpeed = 50,
}: HeroGlobalProps) {
  // Logic goes here
  return (
    <div className="relative h-[88vh] max-h-[768px] min-h-[560px] w-screen md:max-h-[960px] md:min-h-[768px]">
      <Wrapper
        as={"header"}
        className="flex h-full flex-col items-center justify-center"
      >
        {hasScene && (
          <Suspense
            fallback={
              <Spinner
                size="lg"
                color="muted"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            }
          >
            <DynamicScene
              position={position}
              count={count}
              gap={gap}
              fov={fov}
              t={t}
              f={f}
              a={a}
              tSpeed={tSpeed}
              className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-screen opacity-40"
            />
          </Suspense>
        )}

        {/* {!hasScene && bgSvgSrc !== null && (
          <img src={} alt="" />
        )} */}

        <Heading
          as={"h1"}
          size="3xl"
          align="center"
          className="mb-[0.65em] mt-auto lg:mb-0"
        >
          {title}
        </Heading>
        <div className="flex w-full flex-col lg:mt-auto lg:flex-row-reverse lg:items-start">
          <p className="mx-auto max-w-xl text-center text-base font-medium md:text-lg lg:mr-0 lg:ml-auto lg:text-left">
            {perex}
          </p>

          <a
            href="#vice"
            className="group mx-auto mt-12 flex cursor-pointer flex-col items-center justify-center outline-none focus-visible:outline-4 focus-visible:outline-offset-8 focus-visible:outline-copy-rich/70 xs:mt-28 lg:mr-auto lg:ml-0 lg:mt-0 lg:items-start"
          >
            <span className="block font-display text-xl font-semibold">
              {cta}
            </span>
            <div className="mt-7 flex items-end justify-center lg:mt-3 lg:animate-none">
              <span className="h-24 w-0.5 origin-top scale-y-50 rounded-full bg-primary transition-transform duration-300 ease-out-back group-hover:scale-y-100" />
              <span className="h-4 w-0.5 origin-bottom -translate-x-0.5 -translate-y-12 rotate-45 rounded-full bg-primary transition-transform duration-300 ease-out-back group-hover:translate-y-0" />
              <span className="h-4 w-0.5 origin-bottom -translate-x-1 -translate-y-12 -rotate-45 rounded-full bg-primary transition-transform duration-300 ease-out-back group-hover:translate-y-0" />
            </div>
            {/* <HiArrowDown className="mt-8 text-3xl text-primary" /> */}
          </a>
        </div>
      </Wrapper>
    </div>
  );
}
