import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";
import { Suspense } from "react";
import Scene3D from "@components/Scene3D";

type HeroGlobalProps = {
  title?: string;
  perex?: string;
  cta?: string;
  // bgSvgSrc?: string | null;
  // Scene props
  hasScene?: boolean;
  position?: [number, number, number];
  rotation?: [number, number, number];
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
  rotation = [0, 0, 0],
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
              <div className="absolute top-0 left-0 z-10 flex h-[110vh] w-screen items-center justify-center">
                <span className="block">Loading...</span>
              </div>
            }
          >
            {/* <Scene3D
            position={[0, 90, 0]}
            rotation={[120, 0, 0]}
            count={180}
            gap={2.5}
            fov={90}
            className="absolute top-0 left-0 -z-10 h-full w-screen opacity-40"
          /> */}
            <Scene3D
              position={position}
              rotation={rotation}
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
