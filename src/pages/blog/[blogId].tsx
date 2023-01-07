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
      <Seo
        title="Detail stránky blogu"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />
      {/* Page Content... */}
      <HeroGlobal title={name} perex={perex} cta="Přečíst více" />

      <Wrapper size="lg" paddedContent="md">
        <div className="grayscale-toned-image w-full overflow-hidden rounded-xl">
          <Image
            src={imageUrl}
            alt="obrazek"
            width={1920}
            height="1080"
            className="aspect-video w-full object-cover"
          />
        </div>
      </Wrapper>

      <ContentFormater id="vice">
        {/* CMS Content goes here */}
        <ReactMarkdown>{body}</ReactMarkdown>
      </ContentFormater>

      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide />
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
      body: blogData.attributes.name,
      imageUrl: blogData.attributes.mainImage.data.attributes.url,
    },
  };
}

export async function getStaticPaths() {
  const data = (
    await (await fetch(config.ipToFetch + "/api/blogs?fields[0]=id")).json()
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
