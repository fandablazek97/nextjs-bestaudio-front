import AppLink from "@ui/AppLink";
import { socials } from "@configs/socials";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

type SocialLinksOptions = {
  as?: React.ElementType;
  className?: string;
  [x: string]: any;
};

export default function SocialLinks({
  as: Tag = "div",
  className = "",
  ...rest
}: SocialLinksOptions) {
  // Logic goes here
  return (
    <Tag className={`${className}`} {...rest}>
      <ul className="flex gap-x-6 xl:gap-x-10">
        <li>
          <AppLink
            href={socials.facebook.href}
            aria-label={socials.facebook.aria}
            className="text-xl text-copy outline-none transition-colors duration-150 ease-in-out hover:text-primary focus-visible:ring-2 focus-visible:ring-copy/70"
          >
            <FaFacebookF />
          </AppLink>
        </li>
        <li>
          <AppLink
            href={socials.instagram.href}
            aria-label={socials.instagram.aria}
            className="text-xl text-copy outline-none transition-colors duration-150 ease-in-out hover:text-primary focus-visible:ring-2 focus-visible:ring-copy/70"
          >
            <FaInstagram />
          </AppLink>
        </li>
        <li>
          <AppLink
            href={socials.youtube.href}
            aria-label={socials.youtube.aria}
            className="text-xl text-copy outline-none transition-colors duration-150 ease-in-out hover:text-primary focus-visible:ring-2 focus-visible:ring-copy/70"
          >
            <FaYoutube />
          </AppLink>
        </li>
      </ul>
    </Tag>
  );
}
