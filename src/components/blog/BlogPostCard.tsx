import Heading from "@ui/Heading";
import Link from "next/link";
import Image from "next/image";

type BlogPostCardProps = {
  href?: string;
  imageSrc?: string;
  title?: string;
  length?: number;
  date?: string;
  perex?: string;
  className?: string;
};

export default function BlogPostCard({
  href = "/",
  imageSrc = "/images/team/member.jpg",
  title = "Název příspěvku",
  length = 5,
  date = "1.11. 2022",
  perex = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  className = "",
}: BlogPostCardProps) {
  function changeDateType(date: string) {
    var newDate =
      date.split("-")[2] + "." + date.split("-")[1] + "." + date.split("-")[0];
    return newDate;
  }
  return (
    <Link
      href={href}
      className={`group isolate scale-100 outline-none transition duration-300 ease-out hover:scale-95 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-copy-rich/70 ${className}`}
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-gray-700 object-cover object-center">
        <Image
          src={imageSrc}
          alt={title}
          width="1920"
          height="1200"
          className="transition duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-3 py-8">
        <Heading as={"span"} size="md" color="primary" className="block">
          {title}
        </Heading>
        <div className="flex gap-2 text-sm font-semibold uppercase tracking-widest text-copy-muted">
          <span className="block">{length} min</span>
          <span className="block">/</span>
          <span className="block">{changeDateType(date)}</span>
        </div>
        <p className="text-base">{perex}</p>
      </div>
    </Link>
  );
}
