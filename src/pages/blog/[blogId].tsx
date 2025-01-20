import Seo from "@ui/Seo";
import HeroGlobal from "@components/HeroGlobal";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import CallToActionWide from "@ui/CallToActionWide";
import ContentFormater from "@ui/ContentFormater";
import Image from "next/image";
import { config } from "@configs/site-config";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type ThisProps = {
  name: string;
  perex: string;
  body: string;
  imageUrl: string;
};

const BlogDetail: NextPage<ThisProps> = ({ name, perex, body, imageUrl }) => {
  return (
    <>
      <Seo title={name} description={perex} noIndex={false} noFollow={false} />
      {/* Page Content... */}
      <HeroGlobal title={name} perex={perex} cta="Přečíst více" />

      {imageUrl && (
        <Wrapper size="lg" paddedContent="md">
          <div className="w-full overflow-hidden rounded-xl bg-gray-700">
            <Image
              src={imageUrl}
              alt="obrazek"
              width={1920}
              height={1080}
              className="aspect-video w-full object-cover"
            />
          </div>
        </Wrapper>
      )}

      <Wrapper size="sm" className="pb-40">
        <ContentFormater id="vice">
          {/* CMS Content goes here */}
          <ReactMarkdown>{body}</ReactMarkdown>
        </ContentFormater>
      </Wrapper>

      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide content="Naši technici vám zodpoví všechny otázky ohledně vylepšení zvuku a tlumení ve vašem voze. Společně najdeme nejlepší cenové řešení a v případě zájmu vybereme termín realizace."/>
      </Wrapper>
    </>
  );
};

export default BlogDetail;

export async function getStaticProps({ params }: any) {
  const blogData = (
    await (
      await fetch(
        config.ipToFetch +
          "/api/blogs/" +
          params.blogId +
          "?populate[mainImage][fields][0]=url"
      )
    ).json()
  ).data;
  return {
    props: {
      name: blogData.attributes.name,
      length: blogData.attributes.length,
      date: blogData.attributes.date,
      perex: blogData.attributes.perex,
      body: blogData.attributes.body,
      imageUrl: blogData.attributes.mainImage?.data?.attributes?.url || null,
    },
  };
}

export async function getStaticPaths() {
  const data = (
    await (
      await fetch(
        config.ipToFetch +
          "/api/blogs?fields[0]=id&sort[0]=id&pagination[page]=1&pagination[pageSize]=100"
      )
    ).json()
  ).data;

  const paths = Object.entries(data).map((blog: any) => {
    return {
      params: { blogId: String(blog[1].id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
