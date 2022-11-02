type LogoBrandFullProps = {
  variant?: "black" | "white";
  className?: string;
};

export default function LogoBrandFull({
  variant = "black",
  className = "",
}: LogoBrandFullProps) {
  return (
    <div className={`h-[52px] w-[173px] ${className}`}>
      {variant === "black" ? (
        <img
          src="/svg/bestaudio_logo_horizontalni_digital_svetle_pozadi.svg"
          alt="Logo značky"
          width="173"
          height="52"
          className="h-full w-full"
        />
      ) : (
        <img
          src="/svg/bestaudio_logo_horizontalni_digital_tmave_pozadi.svg"
          alt="Logo značky"
          width="173"
          height="52"
          className="h-full w-full"
        />
      )}
    </div>
  );
}
