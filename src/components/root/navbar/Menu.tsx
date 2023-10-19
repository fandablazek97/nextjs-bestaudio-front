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
        className={`transition-[opacity,visibility] fixed inset-0 z-0 h-screen w-screen overflow-y-auto bg-body-100 ease-out ${
          isOpen
            ? "duration-[400ms] visible opacity-100"
            : "invisible opacity-0 duration-150"
        }`}
      >
        <Wrapper
          size="lg"
          className="lg:pl-[50%] flex h-full flex-col justify-between pt-20 pl-0 xs:pt-24 md:pt-36"
        >
          <MenuLinks
            onEachLinkClick={closeMenu}
            className={`transition-[transform,opacity] transform-gpu ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-150 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />
          <MenuSecondaryLinks
            onEachLinkClick={closeMenu}
            className={`transition-[transform,opacity] my-8 transform-gpu ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-300 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />
          <SocialLinks
            className={`transition-[transform,opacity] my-auto transform-gpu pb-8 ease-out ${
              isOpen
                ? "delay-[450ms] translate-y-0 opacity-100 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />

          <MenuCta
            className={`transition-[transform,opacity] my-auto transform-gpu pb-8 ease-out ${
              isOpen
                ? "delay-[600ms] translate-y-0 opacity-100 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />

          <div
            className={`transition-[transform,opacity] my-auto transform-gpu pb-36 ease-out xs:hidden ${
              isOpen
                ? "delay-[750ms] translate-y-0 opacity-100 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          >
            <Button
              href={shop.href}
              variant="outlined"
              leftIcon={<HiShoppingCart />}
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
