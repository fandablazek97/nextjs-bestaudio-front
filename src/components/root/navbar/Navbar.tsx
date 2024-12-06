import LogoBrandFull from "@ui/LogoBrandFull";
import Wrapper from "@ui/Wrapper";
import { useScrollPosition } from "@hooks/useScrollPosition";
import SmartLink from "@ui/SmartLink";
import { useState } from "react";
import Menu from "./Menu";
import NavbarLinks from "./NavbarLinks";
import NavbarSecondaryLinks from "./NavbarSecondaryLinks";
import Button from "@ui/Button";
import { HiShoppingCart } from "react-icons/hi2";
import { shop } from "@configs/routes";
import { routes } from "@configs/routes";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const contactRoute = routes.find((route) => route.href === "/kontakt");

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const navScrolled = currPos.y < -48;
      const navScrolledFurther = currPos.y > -640;
      const navScrolledDown = currPos.y > prevPos.y;
      const navIsHidden = navScrolledFurther || navScrolledDown;

      // Scrolled state of navbar
      if (navScrolled !== isScrolled) setIsScrolled(navScrolled);

      // Hide / Show navbar
      if (navIsHidden !== isVisible) setIsVisible(navIsHidden);
    },
    [isVisible, isScrolled]
  );

  return (
    <nav
      className={clsx("transition fixed isolate z-40 h-16 w-screen duration-500 sm:h-20 2xl:h-24", 
        // isVisible ? "xl:translate-y-0" : "xl:-translate-y-full",
          isScrolled
            ? "bg-body/80 backdrop-blur-lg"
            : "bg-gradient-to-b from-body/80 to-transparent"
      )}
    >
      <Wrapper
        size="lg"
        className="flex h-full items-center justify-end sm:gap-8 md:gap-10"
      >
        {/* Logo */}
        <SmartLink
          href="/"
          className="scale-[0.7] z-10 mr-auto origin-left cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-copy-rich/70 sm:scale-100"
        >
          <LogoBrandFull variant="white" />
        </SmartLink>

        {/* Links */}
        <NavbarLinks className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:block" />

        {/* Secondary links */}
        <NavbarSecondaryLinks className="hidden xl:block" />

        <div className="mr-2 hidden shrink-0 xl:block sm:mr-0">
          <Button
            href={shop.href}
            variant="outlined"
            leftIcon={<HiShoppingCart />}
            color="primary"
            size="sm"
            className="z-10"
          >
            {shop.label}
          </Button>
        </div>

        <div className="block xl:hidden mr-2 shrink-0 sm:mr-0">
          <Button
            href={contactRoute?.href}
            variant="outlined"
            color="primary"
            size="sm"
            className="z-10"
          >
            {contactRoute?.label}
          </Button>
        </div>

        <Menu className="block xl:hidden" />
      </Wrapper>
    </nav>
  );
}
