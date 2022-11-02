import Heading from "@ui/Heading";
import ScrollReveal from "@ui/ScrollReveal";

export default function SectionTemplate() {
  return (
    <>
      <ScrollReveal>
        <Heading as={"h2"} size="xl" className="max-w-xl" color="primary">
          Proč chtít lepší zvuk v autě?
        </Heading>
      </ScrollReveal>
      <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-28 sm:grid-cols-2 lg:mt-40 lg:grid-cols-3 lg:gap-14">
        <ScrollReveal className="col-span-1">
          <Heading as={"h3"} size="md" className="mb-4">
            Lorem ipsum
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit
            nam nobis nemo adipisci deleniti ipsa laudantium minus consectetur
            aperiam!
          </p>
        </ScrollReveal>
        <ScrollReveal smDelay="200" className="col-span-1">
          <Heading as={"h3"} size="md" className="mb-4">
            Lorem ipsum
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit
            nam nobis nemo adipisci deleniti ipsa laudantium minus consectetur
            aperiam!
          </p>
        </ScrollReveal>
        <ScrollReveal lgDelay="400" className="col-span-1">
          <Heading as={"h3"} size="md" className="mb-4">
            Lorem ipsum
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit
            nam nobis nemo adipisci deleniti ipsa laudantium minus consectetur
            aperiam!
          </p>
        </ScrollReveal>
      </div>
    </>
  );
}
