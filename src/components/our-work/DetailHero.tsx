import Heading from "@ui/Heading";
import Image from "next/image";
import Wrapper from "@ui/Wrapper";

type Props = {
  title: string;
  perex: string;
  src: string;
};

export default function DetailHero({
  title = "Lorem ipsum dolor",
  perex = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint quae sed veniam quasi voluptate dolore minima deserunt. Quia, repellendus!",
  src = "/images/work/bmw.jpg",
}: Props) {
  return (
    <div className="relative h-[66vh] min-h-[480px] w-screen md:h-screen">
      {/* Bg image */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-gray-700 opacity-50">
        <Image
          src={src}
          alt={title}
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute left-0 right-0 top-0 -z-10 h-64 w-screen bg-gradient-to-b from-body/70 via-body/50 to-transparent"></div>
      <div className="absolute left-0 right-0 bottom-0 -z-10 h-96 w-screen bg-gradient-to-t from-body/70 via-body/50 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center lg:items-end">
        <Wrapper
          size="lg"
          paddedContent="sm"
          className="flex flex-col lg:flex-col-reverse"
        >
          <Heading
            as="h1"
            size="none"
            className="mb-[1em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
          </Heading>
          <p className="max-w-2xl text-lg font-medium text-white sm:text-xl lg:mb-32 lg:ml-auto">
            {perex}
          </p>
        </Wrapper>
      </div>
    </div>
  );
}
