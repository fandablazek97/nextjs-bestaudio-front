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
      className={`flex shrink-0 flex-row items-center justify-center gap-2 rounded-full bg-body-100 py-2.5 px-6 outline-none transition-colors duration-300 hover:bg-body-200 focus-visible:ring-4 focus-visible:ring-primary ${className}`}
    >
      <div className="flex h-7 w-9 shrink-0 items-center justify-center">
        <Image
          src={src}
          alt={name}
          width={36}
          height={28}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <span className="hidden font-display text-sm leading-none sm:block">
        {name}
      </span>
    </a>
  ) : (
    <div
      className={`flex shrink-0 flex-row items-center justify-center gap-1.5 rounded-full bg-body-200/20 py-3 px-6 backdrop-blur-sm ${className}`}
    >
      <div className="flex h-7 w-9 shrink-0 items-center justify-center">
        <Image
          src={src}
          alt={name}
          width={36}
          height={28}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <span className="hidden font-display text-sm leading-none sm:block">
        {name}
      </span>
    </div>
  );
}
