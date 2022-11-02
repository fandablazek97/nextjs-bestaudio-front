import Image from "next/image";

type CarBrandProps = {
  name?: string;
  src?: string;
  isLink?: boolean;
  href?: string;
  className?: string;
};

export default function CarBrand({
  name = "Značka",
  src = "/images/car-brands/bmw.jpg",
  isLink = false,
  href = "/",
  className = "",
}: CarBrandProps) {
  return isLink ? (
    <a
      href={href}
      target={"_blank"}
      rel="noopenner noreferrer"
      className={`flex shrink-0 flex-row items-center justify-center gap-1.5 rounded-full bg-body-100 p-2 outline-none transition-colors duration-300 hover:bg-body-200 focus-visible:ring-4 focus-visible:ring-primary ${className}`}
    >
      <Image
        src={src}
        alt={name}
        width={36}
        height={36}
        className="h-9 w-9 rounded-full"
      />
      <span className="pr-1.5 font-display text-lg">{name}</span>
    </a>
  ) : (
    <div
      className={`flex shrink-0 flex-row items-center justify-center gap-1.5 rounded-full bg-body-100 p-2 ${className}`}
    >
      <Image
        src={src}
        alt={name}
        width={36}
        height={36}
        className="h-9 w-9 rounded-full"
      />
      <span className="pr-1.5 font-display text-lg">{name}</span>
    </div>
  );
}
