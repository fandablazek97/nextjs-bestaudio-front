import { TeamMemberCard } from "@components/about/TeamMemberCard";
import CallToAction from "@ui/CallToAction";
import Heading from "@ui/Heading";
import HeroGlobal from "@components/HeroGlobal";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import { team } from "@configs/team";

const ONas: NextPage = () => {
  return (
    <>
      <Seo
        title="Služby"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />

      <HeroGlobal title="O nás" />

      <Wrapper
        as={"section"}
        id="vice"
        paddedContentTop="sm"
        paddedContentBottom="lg"
      >
        <Heading as={"h2"} size="xl" color="primary">
          Poznejte Bestaudio
        </Heading>
        <div className="mt-12 grid w-full grid-cols-1 gap-12 md:mt-28 md:grid-cols-2">
          <p className="col-span-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eaque hic fugiat id, consectetur molestias quidem laborum ducimus
            voluptatibus saepe dolorem dolore itaque tempore ullam? Aperiam
            repellendus voluptate quaerat consectetur reprehenderit fugiat
            inventore veritatis explicabo esse. Nihil odit, voluptatibus, sunt a
            commodi eius repellat fuga minus nesciunt corporis impedit rerum
            voluptate nam dolorum! Magnam dolores aliquid itaque placeat.
          </p>
          <p className="col-span-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            assumenda ab provident dolore atque repudiandae fuga, velit, vitae
            natus inventore quaerat esse corrupti eaque dicta exercitationem ut
            illo cupiditate. Eaque, repudiandae facere maxime corporis omnis
            quibusdam sed rem.
          </p>
        </div>
      </Wrapper>

      <Wrapper size="lg">
        <div className="aspect-video w-full rounded-md bg-body-200"></div>
      </Wrapper>

      <Wrapper paddedContent="lg">
        <Heading as={"h2"} size="xl" color="primary">
          Náš tým
        </Heading>
        <div className="mt-12 grid w-full grid-cols-1 gap-x-10 gap-y-10 md:mt-28 lg:grid-cols-2 lg:gap-y-16 xl:gap-x-16 xl:gap-y-24">
          {team.map((member, i) => (
            <TeamMemberCard
              key={i}
              imageSrc={member.src}
              name={member.name}
              position={member.position}
              content={member.content.long}
              className="col-span-1"
            />
          ))}
        </div>
      </Wrapper>

      {/* CTAs */}
      <Wrapper size="lg" paddedContentTop="sm" paddedContentBottom="lg">
        <Heading
          as={"h2"}
          size="2xl"
          align="center"
          className="mx-auto mb-10 sm:mb-16"
        >
          Kam dál?
        </Heading>
        <div className="grid w-full grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
          <CallToAction className="col-span-1" />
          <CallToAction className="col-span-1" />
        </div>
      </Wrapper>
    </>
  );
};

export default ONas;
