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
    <div className="relative h-[80vh] min-h-[540px] w-screen lg:min-h-[580px]">
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
            position={[90, 12, 0]}
            fov={100}
            tSpeed={18}
            a={3.75}
            className="pointer-events-none absolute top-0 left-0 -z-10 h-[80vh] min-h-full w-screen translate-y-[20vh] opacity-30 sm:h-[120vh] sm:translate-y-0"
          />
        </Suspense>
        <Heading as={"h1"} size="home-hero" align="center">
          Vytváříme dokonalý <br className="hidden sm:block" /> zvukový zážitek
          v autě
          {/* Děláme nejlepší <br className="hidden sm:block" /> zvuk v autě */}
        </Heading>
        <p className="mx-auto mt-12 max-w-xl text-center text-base font-medium md:text-lg lg:mt-28 lg:ml-auto lg:mr-0 lg:text-left">
          Dvacet let se zabýváme špičkovým ozvučením vozů. Máme za sebou stovky
          montáží. Posouváme limity toho, co je možné.
        </p>
      </Wrapper>
    </div>
  );
}
