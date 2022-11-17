import Button from "@ui/Button";
import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";
import AppLink from "@ui/AppLink";

export default function Services() {
  return (
    <>
      <ScrollReveal>
        <Heading as={"h2"} size="xl" className="max-w-xl" color="primary">
          Na co jsme specialisti
        </Heading>
      </ScrollReveal>
      <div className="mt-16 grid grid-cols-1 gap-y-14 gap-x-10 sm:mt-28 sm:grid-cols-2 lg:mt-40 lg:grid-cols-3 lg:gap-14">
        <ScrollReveal className="col-span-1 flex flex-col items-start gap-5">
          <Heading as={"h3"} size="md">
            Lorem ipsum
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit
            nam nobis nemo adipisci deleniti ipsa laudantium minus consectetur
            aperiam!
          </p>
          <AppLink href="/kontakt" passHref>
            <Button as={"a"} variant="outlined" className="mt-5">
              Objednat
            </Button>
          </AppLink>
        </ScrollReveal>
        <ScrollReveal
          smDelay="200"
          className="col-span-1 flex flex-col items-start gap-5"
        >
          <Heading as={"h3"} size="md">
            Lorem ipsum
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit
            nam nobis nemo adipisci deleniti ipsa laudantium minus consectetur
            aperiam!
          </p>
          <AppLink href="/kontakt" passHref>
            <Button as={"a"} variant="outlined" className="mt-5">
              Objednat
            </Button>
          </AppLink>
        </ScrollReveal>
        <ScrollReveal
          lgDelay="400"
          className="col-span-1 flex flex-col items-start gap-5"
        >
          <Heading as={"h3"} size="md">
            Lorem ipsum
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit
            nam nobis nemo adipisci deleniti ipsa laudantium minus consectetur
            aperiam!
          </p>
          <AppLink href="/kontakt" passHref>
            <Button as={"a"} variant="outlined" className="mt-5">
              Objednat
            </Button>
          </AppLink>
        </ScrollReveal>
      </div>
    </>
  );
}
