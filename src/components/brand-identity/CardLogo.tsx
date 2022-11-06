import Heading from "@ui/Heading";
import Button from "@ui/Button";
import { HiCloudArrowDown } from "react-icons/hi2";

type CardLogoProps = {
  srcSvg: string;
  srcPng: string;
  width: number;
  height: number;
  title: string;
  caption?: string | null;
  background?: "black" | "white";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  isUpScaled?: boolean;
  className?: string;
};

const cvs = {
  base: "flex aspect-[3/2] items-center justify-center overflow-hidden",
  background: {
    black: "bg-black",
    white: "bg-white",
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
  },
  isUpScaled: "scale-125 lg:scale-150",
};

export default function CardLogo({
  srcSvg = "/brand/bestaudio_logo_horizontalni_digital_svetle_pozadi.svg",
  srcPng = "/brand/bestaudio_logo_horizontalni_digital_svetle_pozadi.svg",
  width = 190,
  height = 57,
  title = "Logo značky",
  caption = null,
  background = "black",
  radius = "none",
  isUpScaled = false,
  className = "",
}: CardLogoProps) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <div
        className={`${cvs.base} ${cvs.background[background]} ${cvs.radius[radius]}`}
      >
        <div
          className={`${isUpScaled ? cvs.isUpScaled : ""}`}
          style={{ width: width + "px", height: height + "px" }}
        >
          <img
            src={srcSvg}
            alt={title}
            width={width}
            height={height}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <Heading as={"h3"} size="md">
        {title}
      </Heading>
      {caption !== null && <p>{caption}</p>}
      <div className="flex justify-start gap-5">
        <Button as="a" href={srcSvg} download leftIcon={<HiCloudArrowDown />}>
          SVG
        </Button>
        <Button as="a" href={srcPng} download leftIcon={<HiCloudArrowDown />}>
          PNG
        </Button>
      </div>
    </div>
  );
}
