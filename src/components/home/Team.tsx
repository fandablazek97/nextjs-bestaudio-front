import Button from "@ui/Button";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import { team } from "@configs/team";
import Image from "next/image";

type TeamMemberCardProps = {
  imageSrc: string;
  name: string;
  content: string;
  className?: string;
};

export function TeamMemberCard({
  className = "",
  imageSrc = "/images/team/member.jpg",
  name = "Jméno Příjmení",
  content = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
}: TeamMemberCardProps) {
  return (
    <ScrollReveal className={`flex flex-col gap-5 ${className}`}>
      <div className="grayscale-toned-image aspect-square w-full overflow-hidden rounded-lg bg-gray-700">
        <Image
          src={imageSrc}
          alt={name}
          width="512"
          height="512"
          loading="lazy"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col">
        <Heading as={"span"} size="md" color="primary" hasMarginBottom>
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
      className={`relative grid w-full grid-cols-1 gap-12 lg:grid-cols-2 ${className}`}
    >
      {/* <Image
        src={"/images/particles/bubble.png"}
        alt="částice v pozadí"
        aria-hidden="true"
        width={512}
        height={512}
        className="absolute top-1/2 left-0 hidden -translate-x-1/2 scale-150 opacity-40 lg:block"
      /> */}
      <ScrollReveal
        staggerChildren
        staggerChildrenIncrement="200"
        className="col-span-1 flex flex-col items-start gap-8"
      >
        <Heading as={"h2"} size="xl" className="max-w-xl" color="primary">
          Náš tým
        </Heading>
        <p className="max-w-prose">
          Jsme parta mladých nadšenců do hi-fi. Žijeme naší prací, která je pro
          nás i koníčkem a (nejen) díky tomu dlouhodobě dosahujeme skvělých
          výsledků a realizujeme prvotřídní montáže na světové úrovni.
        </p>
        <div className="mt-5">
          <Button href="/o-nas" size="lg">
            Více o nás
          </Button>
        </div>
      </ScrollReveal>
      <div className="col-span-1 grid grid-cols-1 gap-6 xs:grid-cols-2 sm:gap-16">
        {team.map((member, i) => (
          <TeamMemberCard
            key={i}
            imageSrc={member.src}
            name={member.name}
            content={member.content.short}
            className="col-span-1"
          />
        ))}
      </div>
    </div>
  );
}
