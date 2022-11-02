import { secondary } from "@configs/routes";
import ActiveNavLink from "./ActiveNavLink";

type NavbarSecondaryLinksProps = {
  className?: string;
};

export default function NavbarSecondaryLinks({
  className = "",
}: NavbarSecondaryLinksProps) {
  return (
    <div className={`${className}`}>
      <ul className="flex list-none gap-6 xl:gap-12">
        {secondary.map((route) => (
          <li key={route.label}>
            <ActiveNavLink href={route.href}>{route.label}</ActiveNavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
