import BlogPostCard from "@components/blog/BlogPostCard";
import BlogPosts from "@components/blog/BlogPosts";
import CallToActionWide from "@ui/CallToActionWide";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <>
      <Seo
        title="Blog"
        description="Žijeme naší prací, která je pro nás i koníčkem a (nejen) díky tomu dlouhodobě dosahujeme skvělých výsledků a realizujeme prvotřídní montáže na světové úrovni. Podívejte se na naši práci a posuďte sami."
        noIndex={false}
        noFollow={false}
      />

      <HeroGlobal
        title="Blog"
        perex="Žijeme naší prací, která je pro nás i koníčkem a (nejen) díky tomu dlouhodobě dosahujeme skvělých výsledků a realizujeme prvotřídní montáže na světové úrovni. Podívejte se na naši práci a posuďte sami."
      />

      {/* Příspěvky z případových studií */}
      <Wrapper
        as={"section"}
        id="vice"
        paddedContentTop="lg"
        paddedContentBottom="md"
      >
        <BlogPosts />
      </Wrapper>

      {/* Call to action -> Kontakt */}
      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide content="Naši specialisté s Vámi proberou vhodné řešení, prodiskutují cenu a najdou nejbližší možný termín realizace." />
      </Wrapper>
    </>
  );
};

export default Blog;
