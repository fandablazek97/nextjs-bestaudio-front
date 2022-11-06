import ActiveNavLink from "./ActiveNavLink";
import { routes } from "@configs/routes";

type MenuLinksProps = {
  className?: string;
  onEachLinkClick?: () => void;
};

export default function MenuLinks({
  className = "",
  onEachLinkClick,
}: MenuLinksProps) {
  return (
    <ul className={`flex list-none flex-col gap-y-2 leading-none ${className}`}>
      {routes.map((path) => (
        <li key={path.label}>
          <ActiveNavLink
            href={path.href}
            onClick={onEachLinkClick}
            className="text-xl font-bold text-copy-rich md:text-3xl xl:text-4xl"
          >
            {path.label}
          </ActiveNavLink>
        </li>
      ))}
    </ul>
  );
}
