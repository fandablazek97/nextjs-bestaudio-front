import Heading from "@ui/Heading";

type TeamMemberCardProps = {
  className?: string;
  imageSrc?: string;
  name?: string;
  position?: string;
  content?: string;
};

export function TeamMemberCard({
  className = "",
  imageSrc = "/images/team/member.jpg",
  name = "Jméno Příjmení",
  position = "pozice",
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta repellat minus molestiae, laudantium rerum sapiente in ratione quod nemo recusandae officia eveniet sed cupiditate, iste quisquam autem porro adipisci hic explicabo quasi, perspiciatis assumenda blanditiis enim? Tempora, distinctio minima.",
}: TeamMemberCardProps) {
  return (
    <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 ${className}`}>
      <div className="grayscale-toned-image col-span-1 aspect-square w-full max-w-md overflow-hidden rounded-lg object-cover object-center">
        <img
          src={imageSrc}
          alt={name}
          width="512"
          height="512"
          className="w-full"
        />
      </div>
      <div className="col-span-1 flex flex-col">
        <Heading as={"span"} size="md" color="primary">
          {name}
        </Heading>
        <span className="block text-sm font-semibold uppercase tracking-widest text-copy-muted">
          {position}
        </span>
        <p className="mt-4 text-sm sm:text-base lg:mt-6 xl:text-sm">
          {content}
        </p>
      </div>
    </div>
  );
}
