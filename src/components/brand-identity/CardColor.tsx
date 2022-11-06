import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

type Props = {
  hex: string;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "body"
    | "body-50"
    | "body-100"
    | "body-200";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  hasBorder?: boolean;
  className?: string;
};

const cvs = {
  base: "flex aspect-square w-full items-end justify-start p-3 md:p-6",
  variant: {
    primary: "bg-primary text-primary-content",
    secondary: "bg-secondary text-secondary-content",
    accent: "bg-accent text-accent-content",
    neutral: "bg-neutral text-neutral-content",
    body: "bg-body text-copy",
    "body-50": "bg-body-50 text-copy-rich",
    "body-100": "bg-body-100 text-copy-rich",
    "body-200": "bg-body-200 text-copy-rich",
  },
  hasBorder: "shadow-[inset_0px_0px_0px_2px] shadow-copy-rich",
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
  },
};

export default function CardColor({
  hex = "#F31260",
  variant = "primary",
  radius = "none",
  hasBorder = false,
  className = "",
}: Props) {
  const notify = () => toast("Kód barvy byl zkopírován do schránky");
  return (
    <div
      className={`${cvs.base} ${cvs.variant[variant]} ${cvs.radius[radius]} ${
        hasBorder ? cvs.hasBorder : ""
      } ${className}`}
    >
      <span
        onClick={() => {
          notify();
          copy(hex);
        }}
        className="block cursor-pointer text-xl font-semibold hover:underline hover:underline-offset-1"
      >
        {hex}
      </span>
    </div>
  );
}
