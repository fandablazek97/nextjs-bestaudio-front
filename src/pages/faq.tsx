import Accordion from "@ui/Accordion";
import CallToActionWide from "@ui/CallToActionWide";
import Heading from "@ui/Heading";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";

const Faq: NextPage = () => {
  return (
    <>
      <Seo
        title="FAQ"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />

      <HeroGlobal title="FAQ" />

      {/* Úvodní sekce */}
      <Wrapper
        as={"section"}
        id="vice"
        paddedContentTop="lg"
        paddedContentBottom="md"
      >
        <Heading as={"h2"} size="xl" color="primary">
          Co vás nejčastěji zajímá
        </Heading>
        <p className="col-span-1 mt-12 max-w-3xl text-lg font-medium md:mt-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque
          hic fugiat id, consectetur voluptatibus saepe dolorem dolore itaque
          tempore ullam? Aperiam repellendus voluptate quaerat consectetur
          reprehenderit.
        </p>
      </Wrapper>

      {/* Hlavní otázky */}
      <Wrapper
        paddedContent="sm"
        className="grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2"
      >
        <div className="col-span-1 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Lorem ipsum dolor sit amet?
            </Heading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, earum. Dolor, vel, vero fuga dolorum nesciunt
              eligendi odit, vitae explicabo repellendus quos quam eveniet
              culpa.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Lorem ipsum dolor sit amet?
            </Heading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, earum. Dolor, vel, vero fuga dolorum nesciunt
              eligendi odit, vitae explicabo repellendus quos quam eveniet
              culpa.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Lorem ipsum dolor sit amet?
            </Heading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, earum. Dolor, vel, vero fuga dolorum nesciunt
              eligendi odit, vitae explicabo repellendus quos quam eveniet
              culpa.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Lorem ipsum dolor sit amet?
            </Heading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, earum. Dolor, vel, vero fuga dolorum nesciunt
              eligendi odit, vitae explicabo repellendus quos quam eveniet
              culpa.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Lorem ipsum dolor sit amet?
            </Heading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, earum. Dolor, vel, vero fuga dolorum nesciunt
              eligendi odit, vitae explicabo repellendus quos quam eveniet
              culpa.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as={"span"} size="sm">
              Lorem ipsum dolor sit amet?
            </Heading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, earum. Dolor, vel, vero fuga dolorum nesciunt
              eligendi odit, vitae explicabo repellendus quos quam eveniet
              culpa.
            </p>
          </div>
        </div>
      </Wrapper>

      {/* Další otázky */}
      <Wrapper
        paddedContent="sm"
        className="grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2"
      >
        <div className="col-span-1 flex flex-col divide-y divide-copy-rich/15">
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
        </div>
        <div className="col-span-1 flex flex-col divide-y divide-copy-rich/15">
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Dolores!">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptatem hic repellat numquam aliquid voluptates doloremque vel,
            dolore laudantium veniam deserunt maiores ratione maxime omnis
            laboriosam est necessitatibus similique in? Incidunt totam expedita
            velit voluptates id ratione, cupiditate pariatur suscipit.
          </Accordion>
        </div>
      </Wrapper>

      {/* Call to action -> Kontakt */}
      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide />
      </Wrapper>
    </>
  );
};

export default Faq;
