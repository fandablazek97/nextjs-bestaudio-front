import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import { HiCheck } from "react-icons/hi";

type PriceListItemProps = {
  content: string;
};

export function PriceListItem({
  content = "Lorem ipsum dolor",
}: PriceListItemProps) {
  return (
    <li className="flex items-start justify-start text-base">
      <HiCheck className="mr-2 mt-1 shrink-0 scale-125 text-base" />
      <span className="leading-tight">{content}</span>
    </li>
  );
}

type PriceCardProps = {
  title?: string;
  price?: string;
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  colored?: boolean;
  className?: string;
};

export function PriceCard({
  title = "Název balíčku",
  price = "12 999 Kč",
  level = 1,
  className = "",
  children,
}: PriceCardProps) {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-5 rounded-2xl px-4 py-6 md:px-6 md:py-10
        ${level === 1 ? "bg-body-100/70 text-white backdrop-blur-md" : ""}
        ${level === 2 ? "bg-body-200 text-white" : ""}
        ${
          level === 3
            ? "bg-gradient-to-br from-primary-active to-primary text-gray-900"
            : ""
        }
        ${className}`}
    >
      <Heading as={"span"} size="md" color="none" className={`text-inherit`}>
        {title}
      </Heading>
      <ul role={"list"} className="flex flex-col gap-2.5">
        {children}
      </ul>
      <Heading as="div" size="md" className={`mt-auto pt-5 text-inherit`}>
        <span className="mr-3 text-base">Od</span>
        {price}
      </Heading>
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
          Znázornili jsme pro Vás univerzální příklady našich balíčků, které
          nabízíme. Ty určené přímo pro váš vůz najdete při výběru značky výše.
        </p>
      </ScrollReveal>
      <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:mt-28 xl:grid-cols-4">
        <ScrollReveal className="col-span-1 h-full">
          <PriceCard
            title="Stage 1"
            level={1}
            price="13 990 Kč"
            className="h-full"
          >
            <PriceListItem content="Set 4 reproduktorů a 2 subwooferů" />
            <PriceListItem content="100% kompatibilita" />
            <PriceListItem content="Výkon sestavy 320 W" />
            <PriceListItem content="Jednoduchá montáž" />
          </PriceCard>
        </ScrollReveal>
        <ScrollReveal className="col-span-1 h-full" mdDelay="200">
          <PriceCard
            title="Premium"
            level={2}
            price="81 990 Kč"
            className="h-full"
          >
            <PriceListItem content="Set 8 reproduktorů a 2 subwooferů" />
            <PriceListItem content="Externí aktivní subwoofer" />
            <PriceListItem content="Zesilovač Plug & Play s DSP" />
            <PriceListItem content="100% kompatibilita" />
            <PriceListItem content="Akustický balíček odhlučnění obložení dveří" />
            <PriceListItem content="Výkon sestavy 1420 W + aktivní subwoofer" />
          </PriceCard>
        </ScrollReveal>
        <ScrollReveal className="col-span-1 h-full" xlDelay="400">
          <PriceCard
            title="High-End"
            price="199 990 Kč"
            level={3}
            className="h-full"
          >
            <PriceListItem content="Set 12 reproduktorů a 2 subwooferů" />
            <PriceListItem content="Externí subwoofer" />
            <PriceListItem content="Nejvyšší třídy zesilovačů a reproduktorů od renomovaných výrobců" />
            <PriceListItem content="Akustický balíček odhlučnění obložení dveří" />
            <PriceListItem content="Tlumící balíček odhlučnění zavazadlového prostoru" />
            <PriceListItem content="Výkon sestavy až 3320 W + aktivní subwoofer" />
          </PriceCard>
        </ScrollReveal>
        <ScrollReveal className="col-span-1 h-full" mdDelay="200" xlDelay="600">
          <PriceCard
            title="Stage 2"
            level={1}
            price="42 990 Kč"
            className="h-full"
          >
            <PriceListItem content="Set 8 reproduktorů a 2 subwooferů" />
            <PriceListItem content="Zesilovač Plug & Play s DSP" />
            <PriceListItem content="100% kompatibilita" />
            <PriceListItem content="Výkon sestavy 1420 W" />
          </PriceCard>
        </ScrollReveal>
      </div>
    </>
  );
}
