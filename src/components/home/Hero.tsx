import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";
// import Scene from "@components/3d-scene/Scene";
import { Suspense } from "react";
import Scene3D from "@components/Scene3D";

export default function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[540px] w-screen md:min-h-[768px] lg:h-[90vh]">
      <Wrapper
        as={"header"}
        className="flex h-full flex-col items-center justify-center"
      >
        <Suspense
          fallback={
            <div className="absolute top-0 left-0 z-10 flex h-[110vh] w-screen items-center justify-center">
              <span className="block">Loading...</span>
            </div>
          }
        >
          <Scene3D
            position={[100, 20, 5]}
            fov={90}
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
