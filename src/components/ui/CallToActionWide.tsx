import Heading from "@ui/Heading";
import Link from "next/link";
import Button from "./Button";

type CallToActionWideProps = {
  href?: string;
  preHeading?: string;
  heading?: string;
  content?: string;
  button?: string;
  className?: string;
  [x: string]: any;
};

export default function CallToActionWide({
  href = "/kontakt",
  preHeading = "Zaujalo vás to?",
  heading = "kontaktujte nás",
  content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ducimus dolorem eligendi nemo architecto soluta consectetur, dolores expedita quod nisi.",
  button = "kontakt",
  className = "",
  ...rest
}: CallToActionWideProps) {
  // Logic goes here
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={`group relative flex w-full items-center justify-center overflow-hidden rounded-xl py-14 px-8 outline-none focus-visible:ring-8 focus-visible:ring-primary/70 sm:py-28 ${className}`}
        {...rest}
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary-active to-secondary transition-transform duration-500 ease-in-out group-hover:scale-[0.94]"></div>

        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 transition-transform duration-500 ease-in-out group-hover:scale-[0.97] lg:gap-8">
          <Heading
            as={"span"}
            size="md"
            align="center"
            className="text-gray-900"
          >
            {preHeading}
          </Heading>
          <Heading
            as={"span"}
            size="xl"
            align="center"
            className="text-gray-900"
          >
            {heading}
          </Heading>
          <p className="max-w-prose text-center text-gray-800">{content}</p>
          <Button
            as={"span"}
            size="lg"
            color="neutral"
            isFocusable={false}
            className="mt-3"
          >
            {button}
          </Button>
        </div>
      </a>
    </Link>
  );
}
