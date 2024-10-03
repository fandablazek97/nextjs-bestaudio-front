import CallToActionWide from "@ui/CallToActionWide";
import Heading from "@ui/Heading";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import Testimonials from "@components/Testimonials";
import CaseStudies from "@components/our-work/CaseStudies";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import { carBrandsForNavigation, carPacksForNavigation } from "@configs/brands-packs";
import { config } from "@configs/site-config";

const FilteredPage: NextPage<{data:any, pack:string, brand: string}> = ({data, pack, brand}) => {
  const correctPack = pack.replace("_", " ");
  const correctBrand = brand.replace("_", " ");
  
  return (
    <>
      <Seo
        title="Naše práce"
        description="Dvacet let se zabýváme špičkovým ozvučením vozů. Máme za sebou stovky montáží. Posouváme limity toho, co je možné."
        noIndex={false}
        noFollow={false}
      />

      <HeroGlobal
        title="Naše práce"
        perex="V galerii níže si můžete prohlédnout naši práci. Využijte přiložený filtr pro co nejsnazší vyhledávání."
        hasScene
        position={[25, -50, 15]}
        tSpeed={22}
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
        <CaseStudies data={data} pack={correctPack} brand={correctBrand}/>
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
        <CallToActionWide content="Naši technici vám zodpoví všechny otázky ohledně vylepšení zvuku a tlumení ve vašem voze. Společně najdeme nejlepší cenové řešení a v případě zájmu vybereme termín realizace." />
      </Wrapper>
    </>
  );
};

export default FilteredPage;

export async function getStaticProps({ params }: any) {
  const separated = params.filtered.split("&");
  const brand = separated[0].split("=")[1];
  const pack = separated[1].split("=")[1];
 
  const populateQuery = "?populate[0]=mainImage";
  const fieldsQuery =
    "&fields[0]=name&fields[1]=brand&fields[2]=model&fields[3]=perex&model&fields[4]=pack";
  const sortQuery = "&sort[0]=id%3Adesc";
  let brandQuery = brand === "" ? "" : "&filters[brand][$containsi]=" + brand;
  let packQuery = pack === "" ? "" : "&filters[pack][$containsi]=" + pack;

  const data = (
    await (
      await fetch(
        config.ipToFetch +
          "/api/jobs/" +
          populateQuery +
          brandQuery +
          packQuery +
          fieldsQuery +
          sortQuery
      )
    ).json()
  ).data;
  return {
    props: {
      data: data,
      pack: pack,
      brand: brand
    },
  };
}

export async function getStaticPaths() {
  let pathsToMake:any = [];
  carBrandsForNavigation.map((brand: string) => {
    carPacksForNavigation.map((pack: string) => (
      pathsToMake.push("znacka=" + brand + "&balicek=" + pack)
    ))
  })
  const paths = pathsToMake.map((path: any) => {
    return {
      params: { filtered: path },
    };
  });
  return {
    paths,
    fallback: false,
  };
}