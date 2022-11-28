import CallToActionWide from "@ui/CallToActionWide";
import Heading from "@ui/Heading";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import Testimonials from "@components/Testimonials";
import CaseStudies from "@components/our-work/CaseStudies";
import CaseStudyCard from "@components/our-work/CaseStudyCard";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";

const caseStudies = [
  {
    href: "/nase-prace/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název studie",
    carBrand: "BMW",
    carModel: "X5",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/nase-prace/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název studie",
    carBrand: "BMW",
    carModel: "X5",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/nase-prace/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název studie",
    carBrand: "BMW",
    carModel: "X5",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/nase-prace/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název studie",
    carBrand: "BMW",
    carModel: "X5",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/nase-prace/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název studie",
    carBrand: "BMW",
    carModel: "X5",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/nase-prace/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název studie",
    carBrand: "BMW",
    carModel: "X5",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/nase-prace/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název studie",
    carBrand: "BMW",
    carModel: "X5",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/nase-prace/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název studie",
    carBrand: "BMW",
    carModel: "X5",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/nase-prace/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název studie",
    carBrand: "BMW",
    carModel: "X5",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
];

const NasePrace: NextPage = () => {
  return (
    <>
      <Seo
        title="Naše práce"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />

      <HeroGlobal
        title="Naše práce"
        hasScene
        position={[25, -50, 15]}
        tSpeed={35}
        count={180}
        gap={2.5}
        fov={105}
      />

      {/* Příspěvky z případových studií */}
      <Wrapper
        as={"section"}
        id="vice"
        paddedContentTop="lg"
        paddedContentBottom="md"
      >
        <CaseStudies>
          {caseStudies.map((item, i) => (
            <CaseStudyCard
              key={i}
              href={item.href}
              imageSrc={item.imageSrc}
              title={item.title}
              carBrand={item.carBrand}
              carModel={item.carModel}
              perex={item.perex}
              className="col-span-1"
            />
          ))}
        </CaseStudies>
      </Wrapper>

      {/* Reference */}
      <Wrapper paddedContentTop="sm">
        <Heading
          as={"h2"}
          size="xl"
          align="center"
          color="primary"
          className="mx-auto mb-20 sm:mb-32"
        >
          Reference
        </Heading>
        <Testimonials />
      </Wrapper>

      {/* Call to action -> Kontakt */}
      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide />
      </Wrapper>
    </>
  );
};

export default NasePrace;
