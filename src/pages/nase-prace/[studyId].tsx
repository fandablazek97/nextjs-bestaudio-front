import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import DetailHero from "@components/our-work/DetailHero";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import CallToActionWide from "@ui/CallToActionWide";
import Image from "next/image";
import { config } from "@configs/site-config";
import ReactMarkdown from "react-markdown";

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
}
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
  solutionImageLeftUrl

}: ThisProps) => {
  return (
    <>
      <Seo
        title="Page title"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />
      {/* Page Content... */}
      <DetailHero
        src={mainImageUrl}
        title={name}
        perex={perex}
      />

      <Wrapper
        as={"section"}
        id="vice"
        size="sm"
        paddedContentBottom="md"
        paddedContentTop="lg"
      >
        <Heading as="h2" size="2xl" color="primary" hasMarginBottom>
          Zadání
        </Heading>
        <div>
          <ReactMarkdown>{assigment}</ReactMarkdown>
        </div>
      </Wrapper>

      <Wrapper paddedContent="sm">
        <div className="grayscale-toned-image w-full overflow-hidden rounded-xl">
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
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl">
            <Image
              src={solutionImageLeftUrl}
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-[9/16] w-full object-cover"
            />
          </div>
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl sm:mt-52">
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
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl md:col-span-2">
            <Image
              src={parametersImageBigUrl}
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl">
            <Image
              src={parametersImageLeftUrl}
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl">
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
            {components.map((component:any, i:number) => (
              <li>
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
  
  const studyData = (await (await fetch(config.ipToFetch + "/api/jobs/" + params.studyId + populateQuery)).json()).data
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
      assigmentImageUrl: studyData.attributes.assigmentImage.data.attributes.url,
      parametersImageBigUrl: studyData.attributes.parametersImageBig.data.attributes.url,
      parametersImageLeftUrl: studyData.attributes.parametersImageLeft.data.attributes.url,
      parametersImageRightUrl: studyData.attributes.parametersImageRight.data.attributes.url,
      components: studyData.attributes.components,
      solution: studyData.attributes.solution,
      solutionImageRightUrl: studyData.attributes.solutionImageRight.data.attributes.url,
      solutionImageLeftUrl: studyData.attributes.solutionImageLeft.data.attributes.url,
    }
  }
}


export async function getStaticPaths() {
  const data = (await (await fetch(config.ipToFetch + "/api/jobs?fields[0]=id")).json()).data

  const paths = Object.entries(data).map((study: any) => {
    return {
      params: { studyId: String(study[1].id) }
    }
  })
  return {
    paths,
    fallback: false
  }
}