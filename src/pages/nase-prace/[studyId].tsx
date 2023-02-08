import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import DetailHero from "@components/our-work/DetailHero";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import CallToActionWide from "@ui/CallToActionWide";
import Image from "next/image";
import { config } from "@configs/site-config";
import ReactMarkdown from "react-markdown";

// Icons
import { SlBadge, SlLayers } from "react-icons/sl";
import { IoCarSportOutline } from "react-icons/io5";

type ThisProps = {
  name: string;
  brand: string;
  model: string;
  perex: string;
  assigment: string;
  assigmentImageUrl: string;
  parameters: string;
  parametersImageBigUrl: string;
  parametersImageLeftUrl: string;
  parametersImageRightUrl: string;
  components: any;
  mainImageUrl: string;
  pack: string;
  solution: string;
  solutionImageRightUrl: string;
  solutionImageLeftUrl: string;
};
const PageTemplate: NextPage<ThisProps> = ({
  name,
  brand,
  model,
  perex,
  assigment,
  assigmentImageUrl,
  parameters,
  parametersImageBigUrl,
  parametersImageLeftUrl,
  parametersImageRightUrl,
  components,
  mainImageUrl,
  pack,
  solution,
  solutionImageRightUrl,
  solutionImageLeftUrl,
}: ThisProps) => {
  return (
    <>
      <Seo title={name} description={perex} noIndex={false} noFollow={false} />
      {/* Page Content... */}
      <DetailHero src={mainImageUrl} title={name} perex={perex} />

      <Wrapper
        as={"section"}
        id="vice"
        size="sm"
        paddedContent="sm"
        className="flex flex-wrap gap-x-16 gap-y-8"
      >
        <div className="col-span-1 flex items-center justify-start gap-4">
          <SlBadge aria-hidden="true" className="h-8 w-8 shrink-0 text-white" />
          <span className="block text-xl font-semibold text-copy-muted">
            {brand}
          </span>
        </div>
        <div className="col-span-1 flex items-center justify-start gap-4">
          <IoCarSportOutline
            aria-hidden="true"
            className="h-8 w-8 shrink-0 text-white"
          />
          <span className="block text-xl font-semibold text-copy-muted">
            {model}
          </span>
        </div>
        <div className="col-span-1 flex items-center justify-start gap-4">
          <SlLayers
            aria-hidden="true"
            className="h-8 w-8 shrink-0 text-white"
          />
          <span className="block text-xl font-semibold text-copy-muted">
            {pack}
          </span>
        </div>
      </Wrapper>

      <Wrapper as={"section"} size="sm" paddedContent="sm">
        <Heading as="h2" size="2xl" color="primary" hasMarginBottom>
          Zadání
        </Heading>
        <div>
          <ReactMarkdown>{assigment}</ReactMarkdown>
        </div>
      </Wrapper>

      <Wrapper paddedContent="sm">
        <div className="grayscale-toned-image w-full overflow-hidden rounded-xl bg-gray-700">
          <Image
            src={assigmentImageUrl}
            alt="obrazek"
            width={1920}
            height="1080"
            className="aspect-video w-full object-cover"
          />
        </div>
      </Wrapper>

      <Wrapper size="sm" paddedContent="md">
        <Heading as="h2" size="2xl" color="primary" hasMarginBottom>
          Řešení
        </Heading>
        <div>
          <ReactMarkdown>{solution}</ReactMarkdown>
        </div>
      </Wrapper>

      <Wrapper paddedContent="sm">
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl bg-gray-700">
            <Image
              src={solutionImageLeftUrl}
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-[9/16] w-full object-cover"
            />
          </div>
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl bg-gray-700 sm:mt-52">
            <Image
              src={solutionImageRightUrl}
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-[9/16] w-full object-cover"
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper size="sm" paddedContent="md">
        <Heading as="h2" size="lg" color="primary" hasMarginBottom>
          Technické parametry
        </Heading>
        <div>
          <ReactMarkdown>{parameters}</ReactMarkdown>
        </div>
      </Wrapper>

      <Wrapper paddedContent="sm">
        <div className="grid gap-10 pt-10 md:grid-cols-2">
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl bg-gray-700 md:col-span-2">
            <Image
              src={parametersImageBigUrl}
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl bg-gray-700">
            <Image
              src={parametersImageLeftUrl}
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl bg-gray-700">
            <Image
              src={parametersImageRightUrl}
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper size="sm" paddedContent="md">
        <Heading as="h2" size="lg" color="primary" hasMarginBottom>
          Použité komponenty
        </Heading>
        <div className="grid gap-10 pt-10 prose-a:text-primary prose-a:underline prose-a:underline-offset-2">
          <ul className="col-span-1 ml-3 flex list-disc flex-col gap-3">
            {components.map((component: any, i: number) => (
              <li key={i}>
                {component.name + " - "}
                <a href={component.link}>{component.link}</a>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>

      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide />
      </Wrapper>
    </>
  );
};

export default PageTemplate;

export async function getStaticProps({ params }: any) {
  const populateQuery = `
    ?populate[mainImage][fields][0]=url
    &populate[assigmentImage][fields][0]=url
    &populate[parametersImageBig][fields][0]=url
    &populate[parametersImageLeft][fields][0]=url
    &populate[parametersImageRight][fields][0]=url
    &populate[solutionImageLeft][fields][0]=url
    &populate[solutionImageRight][fields][0]=url
    &populate[components][fields][0]=name&populate[components][fields][1]=link
  `;

  const studyData = (
    await (
      await fetch(
        config.ipToFetch + "/api/jobs/" + params.studyId + populateQuery
      )
    ).json()
  ).data;
  return {
    props: {
      name: studyData.attributes.name,
      brand: studyData.attributes.brand,
      model: studyData.attributes.model,
      perex: studyData.attributes.perex,
      assigment: studyData.attributes.assigment,
      parameters: studyData.attributes.parameters,
      mainImageUrl: studyData.attributes.mainImage.data.attributes.url,
      pack: studyData.attributes.pack,
      assigmentImageUrl:
        studyData.attributes.assigmentImage.data.attributes.url,
      parametersImageBigUrl:
        studyData.attributes.parametersImageBig.data.attributes.url,
      parametersImageLeftUrl:
        studyData.attributes.parametersImageLeft.data.attributes.url,
      parametersImageRightUrl:
        studyData.attributes.parametersImageRight.data.attributes.url,
      components: studyData.attributes.components,
      solution: studyData.attributes.solution,
      solutionImageRightUrl:
        studyData.attributes.solutionImageRight.data.attributes.url,
      solutionImageLeftUrl:
        studyData.attributes.solutionImageLeft.data.attributes.url,
    },
  };
}

export async function getStaticPaths() {
  const data = (
    await (
      await fetch(
        config.ipToFetch +
          "/api/jobs?fields[0]=id&sort[0]=id&pagination[page]=1&pagination[pageSize]=100"
      )
    ).json()
  ).data;

  const paths = Object.entries(data).map((study: any) => {
    return {
      params: { studyId: String(study[1].id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
