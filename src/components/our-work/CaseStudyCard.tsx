import Heading from "@ui/Heading";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

type CaseStudyCardProps = {
  href?: string;
  imageSrc?: string;
  title?: string;
  carBrand?: string;
  carModel?: string;
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
  className = "",
}: CaseStudyCardProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={`isolate scale-100 transition duration-300 ease-out hover:scale-95 ${className}`}
      >
        <div className="aspect-[16/10] w-full overflow-hidden object-cover object-center contrast-125 grayscale">
          <img src={imageSrc} alt={title} width="1920" height="1200" />
        </div>
        <div className="flex flex-col items-start justify-start gap-3 py-8">
          <Heading as={"span"} size="md" color="primary" className="block">
            {title}
          </Heading>
          <div className="flex gap-2 text-sm font-semibold uppercase tracking-widest text-copy-muted">
            <span className="block">{carBrand}</span>
            <span className="block">/</span>
            <span className="block">{carModel}</span>
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
