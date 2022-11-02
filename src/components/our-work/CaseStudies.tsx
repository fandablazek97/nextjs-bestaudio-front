import Button from "@ui/Button";
import { HiChevronDown } from "react-icons/hi";

type CaseStudiesProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function CaseStudies({
  className = "",
  children,
}: CaseStudiesProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="mb-12 flex justify-end gap-5 md:mb-16">
        <span className="inline-flex items-center justify-start font-medium">
          <span className="mr-1">Filtrovat podle značky</span>
          <HiChevronDown className="scale-125" />
        </span>
        <span className="inline-flex items-center justify-start font-medium">
          <span className="mr-1">Filtrovat podle služeb</span>
          <HiChevronDown className="scale-125" />
        </span>
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
