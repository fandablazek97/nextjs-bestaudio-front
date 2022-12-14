type LogoBrandSymbolProps = {
  variant?: "colored" | "black" | "white";
  className?: string;
};

export default function LogoBrandSymbol({
  variant = "colored",
  className = "",
}: LogoBrandSymbolProps) {
  return (
    <div className={`h-[35px] w-[40px] ${className}`}>
      {variant === "colored" && (
        <img
          src="/brand/brand-symbol-color.svg"
          alt="Logo značky"
          width="40"
          height="35"
          className="h-full w-full"
        />
      )}
      {variant === "black" && (
        <img
          src="/brand/brand-symbol-black.svg"
          alt="Logo značky"
          width="40"
          height="35"
          className="h-full w-full"
        />
      )}
      {variant === "white" && (
        <img
          src="/brand/brand-symbol-white.svg"
          alt="Logo značky"
          width="40"
          height="35"
          className="h-full w-full"
        />
      )}
    </div>
  );
}
