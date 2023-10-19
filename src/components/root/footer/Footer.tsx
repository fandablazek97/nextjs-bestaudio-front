// import FooterAuthorSignature from "./FooterAuthorSignature";
import Wrapper from "@ui/Wrapper";
import { config } from "@configs/site-config";
import LogoBrandFull from "@ui/LogoBrandFull";
import { routes, secondary, other, shop } from "@configs/routes";
import AppLink from "@ui/AppLink";
import Heading from "@ui/Heading";
import SocialLinks from "@ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-solid border-body-100">
      <Wrapper
        size="lg"
        paddedContent="sm"
        className="grid grid-cols-1 gap-y-10 gap-x-10 md:grid-cols-2 md:gap-y-20 xl:grid-cols-4"
      >
        <div className="flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <LogoBrandFull variant="white" />
        </div>
        <div className="flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <Heading as={"span"} size="md" hasMarginBottom>
            Navigace
          </Heading>
          <ul className="space-y-1.5">
            {routes.map((route) => (
              <li key={route.label}>
                <AppLink href={route.href} hoverEffect="underline-slide">
                  {route.label}
                </AppLink>
              </li>
            ))}
            {secondary.map((route) => (
              <li key={route.label}>
                <AppLink href={route.href} hoverEffect="underline-slide">
                  {route.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <Heading as={"span"} size="md" hasMarginBottom>
            Další odkazy
          </Heading>
          <ul className="space-y-1.5">
            <li className="pb-3">
              <AppLink
                href={shop.href}
                hoverEffect="underline-slide"
                className="text-primary"
              >
                {shop.label}
              </AppLink>
            </li>
            {other.map((route) => (
              <li key={route.label}>
                <AppLink href={route.href} hoverEffect="underline-slide">
                  {route.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <Heading as={"span"} size="md" hasMarginBottom>
            Sledujte nás
          </Heading>
          <SocialLinks />
        </div>
      </Wrapper>
      <Wrapper
        size="lg"
        className="flex items-center justify-center border-t border-solid border-body-100 py-12"
      >
        <span className="block">
          Copyright © {new Date().getFullYear()} {config.seo.shortUrl}
        </span>
      </Wrapper>
    </footer>
  );
}
