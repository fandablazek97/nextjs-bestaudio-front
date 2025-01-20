import Button from "@ui/Button";
import BlogPostCard from "./BlogPostCard";
// import BlogFilter from "./BlogFilter";
import { useState } from "react";

type BlogPostsProps = {
  data: any;
  className?: string;
};

export default function BlogPosts({ data, className = "" }: BlogPostsProps) {
  const addItems = 3;
  const [showedItems, setShowedItems] = useState<number>(12);

  return (
    <div className={`w-full ${className}`}>
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-y-24 xl:grid-cols-3 xl:gap-x-14">
        {data.map(
          (post: any, i: number) =>
            i < showedItems && (
              <BlogPostCard
                key={i}
                href={"/blog/" + post.id}
                imageSrc={post.attributes.mainImage?.data?.attributes?.url}
                title={post.attributes.name}
                length={post.attributes.length}
                date={post.attributes.date}
                perex={post.attributes.perex}
                className="col-span-1"
              />
            )
        )}
      </div>
      <div className="mt-16 flex items-center justify-center lg:mt-28">
        {data.length > showedItems && (
          <Button
            size="lg"
            onClick={() => setShowedItems(showedItems + addItems)}
          >
            Načíst další
          </Button>
        )}
      </div>
    </div>
  );
}
