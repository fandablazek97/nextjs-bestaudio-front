import Heading from "@ui/Heading";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import Badge from "@ui/Badge";

type CaseStudyCardProps = {
  href?: string;
  imageSrc?: string;
  title?: string;
  carBrand?: string;
  carModel?: string;
  pack?: string;
  perex?: string;
  className?: string;
};

export default function CaseStudyCard({
  href = "/",
  imageSrc = "/images/team/member.jpg",
  title = "Název studie",
  carBrand = "BMW",
  carModel = "X5",
  perex = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam non, totam velit dignissimos in beatae quo voluptatibus molestiae at.",
  pack,
  className = "",
}: CaseStudyCardProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={`group isolate scale-100 outline-none transition duration-300 ease-out hover:scale-95 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-copy-rich/70 ${className}`}
      >
        <div className="grayscale-toned-image aspect-[16/10] w-full overflow-hidden object-cover object-center">
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
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-2 text-sm font-semibold uppercase tracking-widest text-copy-muted">
              <span className="block">{carBrand}</span>
              <span className="block">/</span>
              <span className="block">{carModel}</span>
            </div>
            {pack && (
              <Badge size="sm" className="uppercase">
                {pack}
              </Badge>
            )}
          </div>
          <p className="text-base">{perex}</p>
          <span className="relative mt-4 inline-flex items-center justify-start font-semibold uppercase tracking-wider text-primary before:absolute before:top-full before:bottom-0 before:right-0 before:left-0 before:h-px before:w-full before:translate-y-0 before:bg-current before:content-['']">
            <span className="mr-2">Číst více</span>
            <HiArrowRight />
          </span>
        </div>
      </a>
    </Link>
  );
}
