import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";
import AppLink from "@ui/AppLink";
import { contacts } from "@configs/contacts";

export default function HeroContact() {
  // Logic goes here
  return (
    <div className="relative h-[90vh] max-h-[960px] min-h-[640px] w-screen md:min-h-[768px]">
      <Wrapper
        as={"header"}
        className="flex h-full flex-col items-center justify-center md:pt-12"
      >
        <Heading as={"h1"} size="3xl" align="center">
          Kontakt
        </Heading>
        <div className="mt-16 flex w-full flex-col gap-12 lg:mt-28 lg:flex-row lg:gap-20 2xl:mt-48 2xl:gap-28">
          <div className="flex flex-col items-center justify-center gap-3 lg:items-start lg:justify-start">
            <span className="block font-semibold uppercase tracking-widest text-copy-muted">
              Telefon:
            </span>
            <AppLink
              href={contacts.main.phone.href}
              isExternal
              hoverEffect="underline-slide"
              className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl xl:text-4xl"
            >
              {contacts.main.phone.label}
            </AppLink>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 lg:items-start lg:justify-start">
            <span className="block font-semibold uppercase tracking-widest text-copy-muted">
              E-mail:
            </span>
            <AppLink
              href={contacts.main.email.href}
              isExternal
              hoverEffect="underline-slide"
              className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl xl:text-4xl"
            >
              {contacts.main.email.label}
            </AppLink>
          </div>
          <div className="mx-auto mt-10 flex flex-col items-center justify-center lg:hidden">
            <span className="block font-display text-xl font-semibold">
              Zjistit více
            </span>
            <div className="animate-scroll mt-7 flex items-end justify-center">
              <span className="h-24 w-0.5 rounded-full bg-primary" />
              <span className="h-4 w-0.5 origin-bottom -translate-x-0.5 rotate-45 rounded-full bg-primary" />
              <span className="h-4 w-0.5 origin-bottom -translate-x-1 -rotate-45 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
