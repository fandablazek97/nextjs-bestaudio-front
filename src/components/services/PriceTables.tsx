import Button from "@ui/Button";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import { HiCheck, HiFire } from "react-icons/hi";

type PriceListItemProps = {
  content: string;
};

export function PriceListItem({
  content = "Lorem ipsum dolor",
}: PriceListItemProps) {
  return (
    <li className="flex items-center text-base">
      <HiCheck className="mr-2 scale-125 text-base" />
      <span>{content}</span>
    </li>
  );
}

type PriceCardProps = {
  title?: string;
  children: React.ReactNode;
  colored?: boolean;
  className?: string;
};

export function PriceCard({
  title = "Název balíčku",
  colored = false,
  className = "",
  children,
}: PriceCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-8 rounded-xl p-6 md:p-10 lg:p-12 ${
        colored
          ? "bg-gradient-to-br from-primary-active to-primary text-gray-900"
          : "bg-body-100"
      } ${className}`}
    >
      <Heading
        as={"span"}
        size="md"
        color="none"
        className={`${colored ? "text-gray-900" : "text-primary"}`}
      >
        {title}
      </Heading>
      <ul role={"list"} className="flex flex-col gap-2.5">
        {children}
      </ul>
      {colored ? (
        <Button color="neutral" leftIcon={<HiFire />}>
          Objednat
        </Button>
      ) : (
        <Button variant="outlined" leftIcon={<HiFire />}>
          Objednat
        </Button>
      )}
    </div>
  );
}

export default function PriceTables() {
  return (
    <>
      <ScrollReveal
        staggerChildren
        staggerChildrenIncrement="200"
        className="flex flex-col items-start justify-start gap-8 lg:flex-row lg:justify-between lg:gap-12"
      >
        <Heading as={"h2"} size="xl" className="max-w-xl" color="primary">
          Balíčky
        </Heading>
        <p className="max-w-xl lg:ml-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          quibusdam nihil delectus dolore cumque iure corporis repellendus
          tempora vero labore.
        </p>
      </ScrollReveal>
      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-28 xl:grid-cols-3 xl:gap-16">
        <ScrollReveal className="col-span-1">
          <PriceCard>
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
          </PriceCard>
        </ScrollReveal>
        <ScrollReveal className="col-span-1" mdDelay="200">
          <PriceCard colored>
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
          </PriceCard>
        </ScrollReveal>
        <ScrollReveal className="col-span-1" xlDelay="400">
          <PriceCard>
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
            <PriceListItem content="Lorem ipsum dolor sit amet" />
          </PriceCard>
        </ScrollReveal>
      </div>
    </>
  );
}
