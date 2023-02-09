import SocialLinks from "@ui/SocialLinks";
import Wrapper from "@ui/Wrapper";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import MenuCta from "./MenuCta";
import MenuLinks from "./MenuLinks";
import MenuSecondaryLinks from "./MenuSecondaryLinks";
import Button from "@ui/Button";
import { shop } from "@configs/routes";
import { HiShoppingCart } from "react-icons/hi2";

type MenuProps = {
  className?: string;
};

export default function Menu({ className = "" }: MenuProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Vypíná scrollování při otevřeném menu
  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add(
        "overflow-hidden",
        "relative",
        "h-full",
        "touch-none"
      );
    } else {
      document.body.classList.remove(
        "overflow-hidden",
        "relative",
        "h-full",
        "touch-none"
      );
    }
    return () => {};
  }, [isOpen, setIsOpen]);

  return (
    <div className={`${className}`}>
      <BurgerMenu
        onClick={toggleMenu}
        isActivated={isOpen}
        className={`relative z-10`}
      />
      <div
        className={`fixed inset-0 z-0 h-screen w-screen overflow-y-auto bg-body-100 transition-[opacity,visibility] ease-out ${
          isOpen
            ? "visible opacity-100 duration-[400ms]"
            : "invisible opacity-0 duration-150"
        }`}
      >
        <Wrapper
          size="lg"
          className="flex h-full flex-col justify-between pt-20 pl-0 xs:pt-24 md:pt-36 lg:pl-[50%]"
        >
          <MenuLinks
            onEachLinkClick={closeMenu}
            className={`transform-gpu transition-[transform,opacity] ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-150 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />
          <MenuSecondaryLinks
            onEachLinkClick={closeMenu}
            className={`my-8 transform-gpu transition-[transform,opacity] ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-300 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />
          <SocialLinks
            className={`my-auto transform-gpu pb-8 transition-[transform,opacity] ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-[450ms] duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />

          <MenuCta
            className={`my-auto transform-gpu pb-8 transition-[transform,opacity] ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-[600ms] duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />

          <div
            className={`my-auto transform-gpu pb-36 transition-[transform,opacity] ease-out xs:hidden ${
              isOpen
                ? "translate-y-0 opacity-100 delay-[750ms] duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          >
            <Button
              as={"a"}
              target={"_blank"}
              rel="noopenner noreferrer"
              variant="outlined"
              leftIcon={<HiShoppingCart />}
              href={shop.href}
              color="primary"
              size="sm"
              className="w-full"
            >
              {shop.label}
            </Button>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
