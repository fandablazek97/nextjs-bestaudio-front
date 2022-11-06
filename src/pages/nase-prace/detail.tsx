import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import DetailHero from "@components/our-work/DetailHero";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import CallToActionWide from "@ui/CallToActionWide";
import Image from "next/image";

const PageTemplate: NextPage = () => {
  return (
    <>
      <Seo
        title="Page title"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />
      {/* Page Content... */}
      <DetailHero
        src="/images/work/bmw.jpg"
        title="Název případové studie"
        perex="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est laudantium quia accusantium molestiae et error cupiditate, neque nobis sed!"
      />

      <Wrapper
        as={"section"}
        id="vice"
        size="sm"
        paddedContentBottom="md"
        paddedContentTop="lg"
      >
        <Heading as="h2" size="2xl" color="primary" hasMarginBottom>
          Zadání
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          dignissimos dicta incidunt totam dolore ea minus accusantium
          asperiores unde culpa debitis aliquam perferendis mollitia
          voluptatibus in, odio at inventore fugit. Suscipit laboriosam eveniet
          repellendus possimus? Ut minima officiis maiores, nesciunt amet
          aspernatur, id excepturi eligendi sequi, ipsa et temporibus. Ab
          sapiente dolore commodi mollitia officia exercitationem soluta sunt
          quas libero blanditiis facilis, consectetur fugiat deleniti ducimus
          sit! Et provident eligendi molestias dolores impedit sed ut, voluptate
          repellat, deserunt molestiae culpa aut itaque sequi nesciunt, corporis
          consequuntur. Dolore id quos, tempora, in pariatur autem error
          cupiditate minus dolorem quidem, aspernatur exercitationem!
        </p>
      </Wrapper>

      <Wrapper paddedContent="sm">
        <div className="grayscale-toned-image w-full overflow-hidden rounded-xl grayscale">
          <Image
            src="/images/work/bmw.jpg"
            alt="obrazek"
            width={1920}
            height="1080"
            className="aspect-video w-full object-cover"
          />
        </div>
      </Wrapper>

      <Wrapper size="sm" paddedContent="md">
        <Heading as="h2" size="2xl" color="primary" hasMarginBottom>
          Řešení
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          dignissimos dicta incidunt totam dolore ea minus accusantium
          asperiores unde culpa debitis aliquam perferendis mollitia
          voluptatibus in, odio at inventore fugit. Suscipit laboriosam eveniet
          repellendus possimus? Ut minima officiis maiores, nesciunt amet
          aspernatur, id excepturi eligendi sequi, ipsa et temporibus. Ab
          sapiente dolore commodi mollitia officia exercitationem soluta sunt
          quas libero blanditiis facilis, consectetur fugiat deleniti ducimus
          sit! Et provident eligendi molestias dolores impedit sed ut, voluptate
          repellat, deserunt molestiae culpa aut itaque sequi nesciunt, corporis
          consequuntur. Dolore id quos, tempora, in pariatur autem error
          cupiditate minus dolorem quidem, aspernatur exercitationem!
        </p>
      </Wrapper>

      <Wrapper paddedContent="sm">
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl grayscale">
            <Image
              src="/images/work/bmw.jpg"
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-[9/16] w-full object-cover"
            />
          </div>
          <div className="grayscale-toned-image col-span-1 w-full overflow-hidden rounded-xl grayscale sm:mt-52">
            <Image
              src="/images/work/bmw.jpg"
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-[9/16] w-full object-cover"
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper size="sm" paddedContent="md">
        <Heading as="h2" size="lg" color="primary" hasMarginBottom>
          Technické parametry
        </Heading>
        <p className="pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          dignissimos dicta incidunt totam dolore ea minus accusantium
          asperiores unde culpa debitis aliquam perferendis mollitia
          voluptatibus in, odio at inventore fugit. Suscipit laboriosam eveniet
          repellendus possimus? Ut minima officiis maiores, nesciunt amet
          aspernatur, id excepturi eligendi sequi, ipsa et temporibus. Ab
          sapiente dolore commodi mollitia officia exercitationem soluta sunt
          quas libero blanditiis facilis, consectetur fugiat deleniti ducimus
          sit! Et provident eligendi molestias dolores impedit sed ut, voluptate
          repellat, deserunt molestiae culpa aut itaque sequi nesciunt, corporis
          consequuntur. Dolore id quos, tempora, in pariatur autem error
          cupiditate minus dolorem quidem, aspernatur exercitationem!
        </p>
      </Wrapper>

      <Wrapper paddedContent="sm">
        <div className="grid gap-10 pt-10 md:grid-cols-2">
          <div className="col-span-1 w-full overflow-hidden rounded-xl grayscale md:col-span-2">
            <Image
              src="/images/work/bmw.jpg"
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div className="col-span-1 w-full overflow-hidden rounded-xl grayscale">
            <Image
              src="/images/work/bmw.jpg"
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div className="col-span-1 w-full overflow-hidden rounded-xl grayscale">
            <Image
              src="/images/work/bmw.jpg"
              alt="obrazek"
              width={1920}
              height="1080"
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper size="sm" paddedContent="md">
        <Heading as="h2" size="lg" color="primary" hasMarginBottom>
          Použité komponenty
        </Heading>
        <div className="grid gap-10 pt-10 prose-a:text-primary prose-a:underline prose-a:underline-offset-2 md:grid-cols-2">
          <ul className="col-span-1 ml-3 flex list-disc flex-col gap-3">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
          <ul className="col-span-1 ml-3 flex list-disc flex-col gap-3">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </Wrapper>

      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide />
      </Wrapper>
    </>
  );
};

export default PageTemplate;
