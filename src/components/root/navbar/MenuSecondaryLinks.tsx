import { secondary } from "@configs/routes";
import ActiveNavLink from "./ActiveNavLink";

type MenuSecondaryLinksProps = {
  className?: string;
  onEachLinkClick?: () => void;
};

export default function MenuSecondaryLinks({
  className = "",
  onEachLinkClick,
}: MenuSecondaryLinksProps) {
  return (
    <ul className={`flex list-none flex-col gap-y-3 leading-none ${className}`}>
      {secondary.map((route) => (
        <li key={route.label}>
          <ActiveNavLink href={route.href} onClick={onEachLinkClick}>
            {route.label}
          </ActiveNavLink>
        </li>
      ))}
    </ul>
  );
}
