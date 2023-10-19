import SmartLink from "./SmartLink";

type AppLinkProps = {
  as?: React.ElementType;
  href?: string;
  children: React.ReactNode;
  hoverEffect?:
    | "none"
    | "opacity"
    | "underline"
    | "underline-animated"
    | "underline-slide"
    | "to-primary"
    | "to-secondary"
    | "to-accent";
  onClick?: () => void;
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "relative inline-flex max-w-max cursor-pointer items-center justify-start no-underline",
  hover: {
    none: "",
    opacity: "hover:opacity-70 transition-opacity duration-200",
    underline: "hover:underline hover:underline-offset-2",
    "underline-animated":
      "hover:opacity-70 transition-opacity duration-200 before:absolute before:content-[''] before:top-full before:bottom-0 before:right-0 before:left-0 before:w-full before:h-px before:bg-current before:opacity-0 before:transition before:duration-200 before:transform-gpu before:translate-y-[-0.25em] hover:before:translate-y-0 hover:before:opacity-60",
    "underline-slide":
      "before:absolute before:content-[''] before:top-[90%] before:bottom-0 before:right-0 before:left-0 before:w-full before:h-px before:bg-current before:origin-right before:transition-transform before:duration-300 before:transform-gpu before:scale-x-[0] hover:before:scale-x-[1] hover:before:origin-left",
    "to-primary": "hover:text-primary transition-colors duration-200",
    "to-secondary": "hover:text-secondary transition-colors duration-200",
    "to-accent": "hover:text-accent transition-colors duration-200",
  },
};

export default function AppLink({
  as,
  href,
  children,
  hoverEffect = "none",
  onClick,
  className = "",
  ...rest
}: AppLinkProps) {
  return (
    <SmartLink
      as={as}
      href={href}
      className={`
      ${className} 
      ${hoverEffect !== "none" ? cvs.base : ""} 
      ${cvs.hover[hoverEffect]} 
      outline-none focus-visible:ring-2 focus-visible:ring-copy/70
      `}
      onClick={onClick}
      {...rest}
    >
      {children}
    </SmartLink>
  );
}
