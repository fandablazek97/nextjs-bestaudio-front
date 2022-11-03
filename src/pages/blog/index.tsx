import BlogPostCard from "@components/blog/BlogPostCard";
import BlogPosts from "@components/blog/BlogPosts";
import CallToActionWide from "@ui/CallToActionWide";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";

const blogPosts = [
  {
    href: "/blog/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název příspěvku",
    category: "kategorie",
    date: "20.10. 2022",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/blog/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název příspěvku",
    category: "kategorie",
    date: "20.10. 2022",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/blog/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název příspěvku",
    category: "kategorie",
    date: "20.10. 2022",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/blog/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název příspěvku",
    category: "kategorie",
    date: "20.10. 2022",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/blog/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název příspěvku",
    category: "kategorie",
    date: "20.10. 2022",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
  {
    href: "/blog/detail",
    imageSrc: "/images/work/bmw.jpg",
    title: "Název příspěvku",
    category: "kategorie",
    date: "20.10. 2022",
    perex:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  },
];

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
          {blogPosts.map((post, i) => (
            <BlogPostCard
              key={i}
              href={post.href}
              imageSrc={post.imageSrc}
              title={post.title}
              category={post.category}
              date={post.date}
              perex={post.perex}
              className="col-span-1"
            />
          ))}
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
