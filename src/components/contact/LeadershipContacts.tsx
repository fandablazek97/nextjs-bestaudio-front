import Heading from "@ui/Heading";
import AppLink from "@ui/AppLink";
import { team } from "@configs/team";
import Image from "next/image";

type TeamMemberCardProps = {
  className?: string;
  imageSrc?: string;
  name?: string;
  position?: string;
  phoneLink?: string;
  phoneLabel?: string;
  emailLink?: string;
  emailLabel?: string;
};

export function TeamMemberCard({
  className = "",
  imageSrc = "/images/team/member.jpg",
  name = "Jméno Příjmení",
  position = "pozice",
  phoneLink = "tel:+420123456789",
  phoneLabel = "+420 123 456 789",
  emailLink = "mailto:jmeno@bestaudio.cz",
  emailLabel = "jmeno@bestaudio.cz",
}: TeamMemberCardProps) {
  return (
    <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 ${className}`}>
      <div className="grayscale-toned-image col-span-1 aspect-square w-full max-w-md overflow-hidden rounded-lg bg-gray-700">
        <Image
          src={imageSrc}
          alt={name}
          width="512"
          height="512"
          loading="lazy"
          className="w-full object-cover object-center"
        />
      </div>
      <div className="col-span-1 flex flex-col">
        <Heading as={"span"} size="md" color="primary">
          {name}
        </Heading>
        <span className="block text-xs font-semibold uppercase tracking-widest text-copy-muted">
          {position}
        </span>
        <div className="mt-6 flex flex-col gap-2">
          <AppLink
            href={phoneLink}
            hoverEffect="underline-slide"
            className="font-display text-lg font-bold text-white md:text-2xl lg:text-xl"
          >
            {phoneLabel}
          </AppLink>
          <AppLink
            href={emailLink}
            hoverEffect="underline-slide"
            className="font-display text-lg font-bold text-white md:text-2xl lg:text-xl"
          >
            {emailLabel}
          </AppLink>
        </div>
      </div>
    </div>
  );
}

type LeadershipContactsProps = {
  className?: string;
};

export default function LeadershipContacts({
  className = "",
}: LeadershipContactsProps) {
  return (
    <>
      <div
        className={`flex flex-col items-start justify-start gap-8 lg:flex-row lg:justify-between lg:gap-12 ${className}`}
      >
        <Heading
          as={"h2"}
          size="lg"
          color="primary"
          className="max-w-2xl basis-2/3"
        >
          Dotazy na zboží, montáže, technické dotazy a informace k objednávkám
        </Heading>
        <p className="max-w-xl lg:ml-auto">
          Nemůžete se nám dovolat? Pravděpodobně se věnujeme zákazníkům na
          prodejně nebo vyřizujeme telefonické dotazy. Hned, jak to půjde,
          zavoláme zpět na telefonní číslo, ze kterého jste nám volali. Děkujeme
          za pochopení.
        </p>
      </div>
      <div className="mt-12 grid w-full grid-cols-1 gap-x-10 gap-y-10 md:mt-28 lg:grid-cols-2 lg:gap-y-16 xl:gap-x-16 xl:gap-y-24">
        <TeamMemberCard
          imageSrc={team[0].src}
          name={team[0].name}
          position={team[0].position}
          phoneLink={team[0].contact.phone.href}
          phoneLabel={team[0].contact.phone.label}
          emailLink={team[0].contact.email.href}
          emailLabel={team[0].contact.email.label}
          className="col-span-1"
        />
        <TeamMemberCard
          imageSrc={team[3].src}
          name={team[3].name}
          position={team[3].position}
          phoneLink={team[3].contact.phone.href}
          phoneLabel={team[3].contact.phone.label}
          emailLink={team[3].contact.email.href}
          emailLabel={team[3].contact.email.label}
          className="col-span-1"
        />
        <TeamMemberCard
          imageSrc={team[1].src}
          name={team[1].name}
          position={team[1].position}
          phoneLink={team[1].contact.phone.href}
          phoneLabel={team[1].contact.phone.label}
          emailLink={team[1].contact.email.href}
          emailLabel={team[1].contact.email.label}
          className="col-span-1"
        />
      </div>
    </>
  );
}
