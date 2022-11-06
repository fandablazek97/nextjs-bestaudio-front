type LogoBrandFullProps = {
  variant?: "black" | "white";
  className?: string;
};

export default function LogoBrandFull({
  variant = "black",
  className = "",
}: LogoBrandFullProps) {
  return (
    <div className={`h-[57px] w-[190px] ${className}`}>
      {variant === "black" ? (
        <img
          src="/svg/bestaudio_logo_horizontalni_digital_svetle_pozadi.svg"
          alt="Logo značky"
          width="190"
          height="57"
          className="h-full w-full"
        />
      ) : (
        <img
          src="/svg/bestaudio_logo_horizontalni_digital_tmave_pozadi.svg"
          alt="Logo značky"
          width="190"
          height="57"
          className="h-full w-full"
        />
      )}
    </div>
  );
}
