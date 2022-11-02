import Button from "@ui/Button";
import BlogFilter from "./BlogFilter";

type BlogPostsProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function BlogPosts({
  className = "",
  children,
}: BlogPostsProps) {
  return (
    <div className={`w-full ${className}`}>
      <div>
        <BlogFilter className="mb-12 md:mb-16" />
      </div>
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-y-24 xl:grid-cols-3 xl:gap-x-14">
        {children}
      </div>
      <div className="mt-16 flex items-center justify-center lg:mt-28">
        <Button size="lg">Načíst další</Button>
      </div>
    </div>
  );
}
