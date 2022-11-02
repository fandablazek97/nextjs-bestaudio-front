import Button from "@ui/Button";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";

type TeamMemberCardProps = {
  className?: string;
  imageSrc?: string;
  name?: string;
  content?: string;
};

export function TeamMemberCard({
  className = "",
  imageSrc = "/images/team/member.jpg",
  name = "Jméno Příjmení",
  content = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
}: TeamMemberCardProps) {
  return (
    <ScrollReveal className={`flex flex-col gap-5 ${className}`}>
      <div className="aspect-square w-full overflow-hidden rounded-lg object-cover object-center contrast-125 grayscale">
        <img src={imageSrc} alt={name} width="512" height="512" />
      </div>
      <div className="flex flex-col">
        <Heading as={"span"} size="md" color="primary">
          {name}
        </Heading>
        <p className="text-sm sm:text-base">{content}</p>
      </div>
    </ScrollReveal>
  );
}

type TeamProps = {
  className?: string;
};

export default function Team({ className = "" }: TeamProps) {
  return (
    <div
      className={`grid w-full grid-cols-1 gap-12 lg:grid-cols-2 ${className}`}
    >
      <ScrollReveal
        staggerChildren
        staggerChildrenIncrement="200"
        className="col-span-1 flex flex-col items-start gap-8"
      >
        <Heading as={"h2"} size="xl" className="max-w-xl" color="primary">
          Náš tým
        </Heading>
        <p className="max-w-prose">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint itaque
          possimus aliquam fugit maxime quis repellat asperiores magnam
          accusamus blanditiis.
        </p>
        <div className="mt-5">
          <Button size="lg">Více o nás</Button>
        </div>
      </ScrollReveal>
      <div className="col-span-1 grid grid-cols-1 gap-16 xs:grid-cols-2">
        <TeamMemberCard className="col-span-1" />
        <TeamMemberCard className="col-span-1" />
        <TeamMemberCard className="col-span-1" />
        <TeamMemberCard className="col-span-1" />
        <TeamMemberCard className="col-span-1" />
      </div>
    </div>
  );
}
