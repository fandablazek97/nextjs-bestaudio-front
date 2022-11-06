import { contacts } from "@configs/contacts";
import AppLink from "@ui/AppLink";

type MenuCtaProps = {
  className?: string;
};

export default function MenuCta({ className = "" }: MenuCtaProps) {
  return (
    <ul
      className={`flex list-none flex-col space-y-2 leading-none ${className}`}
    >
      <li>
        <AppLink
          href={contacts.main.phone.href}
          isExternal
          hoverEffect="underline-slide"
          className="text-lg font-medium text-primary"
        >
          {contacts.main.phone.label}
        </AppLink>
      </li>
      <li>
        <AppLink
          href={contacts.main.email.href}
          isExternal
          hoverEffect="underline-slide"
          className="text-lg font-medium text-primary"
        >
          {contacts.main.email.label}
        </AppLink>
      </li>
    </ul>
  );
}
