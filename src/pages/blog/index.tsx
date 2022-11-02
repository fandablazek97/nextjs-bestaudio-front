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
        description="Page description"
        noIndex={false}
        noFollow={false}
      />

      <HeroGlobal title="Blog" />

      {/* Příspěvky z případových studií */}
      <Wrapper paddedContentTop="sm" paddedContentBottom="md">
        <BlogPosts>
          <BlogPostCard href="/blog/detail" className="col-span-1" />
          <BlogPostCard href="/blog/detail" className="col-span-1" />
          <BlogPostCard href="/blog/detail" className="col-span-1" />
          <BlogPostCard href="/blog/detail" className="col-span-1" />
          <BlogPostCard href="/blog/detail" className="col-span-1" />
          <BlogPostCard href="/blog/detail" className="col-span-1" />
        </BlogPosts>
      </Wrapper>

      {/* Call to action -> Kontakt */}
      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide />
      </Wrapper>
    </>
  );
};

export default Blog;
