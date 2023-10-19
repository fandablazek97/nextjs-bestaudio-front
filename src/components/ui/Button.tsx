import { forwardRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import SmartLink from "./SmartLink";

type ButtonProps = {
  as?: React.ElementType;
  href?: string;
  children: string;
  variant?: "filled" | "outlined" | "tinted" | "plain";
  color?: "primary" | "secondary" | "accent" | "neutral" | "light" | "error";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isIconBox?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFocusable?: boolean;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

const cvs = {
  base: "inline-flex relative group/button items-center isolate justify-center font-medium font-display tracking-wide no-underline outline-none transition duration-[250ms] ease-out-back focus-visible:ring-4",
  variant: {
    filled: "",
    outlined:
      "shadow-[inset_0px_0px_0px_2px] bg-opacity-0 group-hover/button:bg-opacity-100",
    tinted: "bg-opacity-15 group-hover/button:bg-opacity-25",
    plain: "bg-opacity-0 group-hover/button:bg-opacity-15",
  },
  textVariants: {
    filled: {
      primary: "text-primary-content",
      secondary: "text-secondary-content",
      accent: "text-accent-content",
      neutral: "text-neutral-content",
      light: "text-gray-900",
      error: "text-error-content",
    },
    outlined: {
      primary: "text-white hover:text-primary-content",
      secondary: "text-secondary hover:text-secondary-content",
      accent: "text-accent hover:text-accent-content",
      neutral: "text-neutral hover:text-neutral-content",
      light: "text-white hover:text-gray-900",
      error: "text-error hover:text-error-content",
    },
    // Used for tinted and plain variants
    tinted: {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      neutral: "text-neutral",
      light: "text-white",
      error: "text-error",
    },
  },
  backgroundVariants: {
    filled: {
      primary: "bg-primary group-hover/button:bg-primary-active",
      secondary: "bg-secondary group-hover/button:bg-secondary-active",
      accent: "bg-accent group-hover/button:bg-accent-active",
      neutral: "bg-neutral group-hover/button:bg-neutral-active",
      light: "bg-white group-hover/button:bg-white",
      error: "bg-error group-hover/button:bg-error-active",
    },
    outlined: {
      primary: "bg-primary shadow-primary",
      secondary: "bg-secondary shadow-secondary",
      accent: "bg-accent shadow-accent",
      neutral: "bg-neutral shadow-neutral",
      light: "bg-white shadow-white",
      error: "bg-error shadow-error",
    },
    // Used for tinted and plain variants
    tinted: {
      primary: "bg-primary group-hover/button:bg-primary-active",
      secondary: "bg-secondary group-hover/button:bg-secondary-active",
      accent: "bg-accent group-hover/button:bg-accent-active",
      neutral: "bg-neutral group-hover/button:bg-neutral-active",
      light: "bg-white group-hover/button:bg-white",
      error: "bg-error group-hover/button:bg-error-active",
    },
  },
  color: {
    focus: {
      primary: "focus-visible:ring-primary/70",
      secondary: "focus-visible:ring-secondary/70",
      accent: "focus-visible:ring-accent/70",
      neutral: "focus-visible:ring-neutral/70",
      light: "focus-visible:ring-white/70",
      error: "focus-visible:ring-error/70",
    },
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
  size: {
    xs: "px-2.5 py-1.5 text-xs md:px-4 md:py-2",
    sm: "px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm",
    md: "px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base",
    lg: "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg",
    xl: "px-8 py-4 text-lg md:px-12 md:py-6 md:text-xl",
  },
  iconBoxSize: {
    xs: "aspect-[1/1] p-1.5 text-xs md:p-2",
    sm: "aspect-[1/1] p-2 text-xs md:p-2.5 md:text-sm",
    md: "aspect-[1/1] p-2.5 text-sm md:p-3 md:text-base",
    lg: "aspect-[1/1] p-3 text-base md:p-4 md:text-lg",
    xl: "aspect-[1/1] p-4 text-lg md:p-6 md:text-xl",
  },
};

const Button = forwardRef<Ref, ButtonProps>(
  (
    {
      as = "button",
      href,
      variant = "filled",
      color = "primary",
      radius = "full",
      size = "md",
      leftIcon = null,
      rightIcon = null,
      isIconBox = false,
      isLoading = false,
      isDisabled = false,
      isFocusable = true,
      className = "",
      onClick,
      children,
      ...rest
    },
    ref
  ) => {
    // Affects `will change` property
    const [hover, setHover] = useState(false);
    return (
      <SmartLink
        as={as}
        href={href}
        ref={ref}
        className={`
          ${cvs.base}
          ${variant === "filled" ? cvs.textVariants.filled[color] : ""} 
          ${variant === "outlined" ? cvs.textVariants.outlined[color] : ""}
          ${
            variant === "tinted" || variant === "plain"
              ? cvs.textVariants.tinted[color]
              : ""
          } 
          ${!isIconBox ? cvs.size[size] : cvs.iconBoxSize[size]}
          ${
            isLoading
              ? "pointer-events-none cursor-not-allowed"
              : "cursor-pointer"
          } 
          ${cvs.radius[radius]}
          ${cvs.color.focus[color]}
          ${isDisabled ? "pointer-events-none opacity-60 grayscale-[30%]" : ""} 
          ${hover ? "will-change-transform" : "will-change-auto"}
          ${className}
        `}
        onClick={onClick}
        disabled={isDisabled || isLoading}
        aria-hidden={isDisabled || isLoading}
        tabIndex={isDisabled || isLoading || !isFocusable ? -1 : 0}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...rest}
      >
        {/* Hover effect */}
        <div
          className={`absolute inset-0 z-[-1] h-full w-full transform-gpu transition duration-[250ms] ease-out-back group-hover/button:scale-110 
        ${cvs.variant[variant]}
        ${variant === "filled" ? cvs.backgroundVariants.filled[color] : ""} 
          ${
            variant === "outlined" ? cvs.backgroundVariants.outlined[color] : ""
          }
          ${
            variant === "tinted" || variant === "plain"
              ? cvs.backgroundVariants.tinted[color]
              : ""
          } 
        ${cvs.radius[radius]}
        ${hover ? "will-change-transform" : "will-change-auto"}
        `}
        ></div>

        {/* Left icon */}
        {leftIcon !== null && isIconBox === false && (
          <span
            className={`z-[1] mr-3 scale-[1.25] ${
              isLoading ? "invisible" : ""
            }`}
          >
            {leftIcon}
          </span>
        )}

        {/* Text */}
        <span
          className={`z-[1] ${isLoading ? "invisible" : ""} 
            ${isIconBox && size === "sm" ? "scale-[1.15]" : ""}
            ${isIconBox && size === "md" ? "scale-[1.3]" : ""}
            ${isIconBox && size === "lg" ? "scale-[1.4]" : ""}
            ${isIconBox && size === "xl" ? "scale-[1.6]" : ""}
        `}
        >
          {children}
        </span>

        {/* Left icon */}
        {rightIcon !== null && isIconBox === false && (
          <span
            className={`z-[1] ml-3 scale-[1.25] ${
              isLoading ? "invisible" : ""
            }`}
          >
            {rightIcon}
          </span>
        )}

        {/* Loading spinner */}
        {isLoading && (
          <CgSpinner className="z-1 absolute inset-0 m-auto h-[1.8em] w-[1.8em] animate-spinner" />
        )}
      </SmartLink>
    );
  }
);

// forwardRef
export type Ref = HTMLButtonElement | HTMLAnchorElement;

Button.displayName = "Button"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

export default Button;
