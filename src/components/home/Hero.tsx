import { Suspense } from "react";
import dynamic from "next/dynamic";
import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";
import Spinner from "@ui/Spinner";
// import Scene from "@components/Scene";

const DynamicScene = dynamic(() => import("../Scene"), {
  suspense: true,
});

export default function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[540px] w-screen md:min-h-[768px] lg:h-[90vh]">
      <Wrapper
        as={"header"}
        className="flex h-full flex-col items-center justify-center"
      >
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
            position={[100, 20, 5]}
            fov={90}
            tSpeed={45}
            className="pointer-events-none absolute top-0 left-0 -z-10 h-[120vh] min-h-full w-screen opacity-40"
          />
        </Suspense>
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
