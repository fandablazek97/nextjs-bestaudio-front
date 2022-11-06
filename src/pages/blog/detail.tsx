import Seo from "@ui/Seo";
import HeroGlobal from "@components/HeroGlobal";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import CallToActionWide from "@ui/CallToActionWide";
import ContentFormater from "@ui/ContentFormater";
import Image from "next/image";

const BlogDetail: NextPage = () => {
  return (
    <>
      <Seo
        title="Detail stránky blogu"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />
      {/* Page Content... */}
      <HeroGlobal title="Detail příspěvku" cta="Přečíst více" />

      <Wrapper size="lg">
        <div className="w-full overflow-hidden rounded-xl grayscale">
          <Image
            src="/images/work/bmw.jpg"
            alt="obrazek"
            width={1920}
            height="1080"
            className="aspect-video w-full object-cover"
          />
        </div>
      </Wrapper>

      <ContentFormater id="vice">
        {/* CMS Content goes here */}

        {/* Demo content - smazat v produkční verzi */}
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
          voluptas facere nihil cupiditate, numquam aperiam sint qui adipisci
          aut? Iusto et temporibus tenetur quaerat ratione repudiandae
          laboriosam, eligendi impedit sed quod neque nihil perspiciatis atque
          pariatur, rerum nisi delectus nobis porro excepturi sapiente, iste
          similique in quidem ea. Sequi!
        </p>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
          voluptas facere nihil cupiditate, numquam aperiam sint qui adipisci
          aut? Iusto et temporibus tenetur quaerat ratione repudiandae
          laboriosam.
        </p>
        <img src="/images/work/bmw.jpg" alt="alt" />
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
          voluptas facere nihil cupiditate, numquam aperiam sint qui adipisci
          aut? Iusto et temporibus tenetur quaerat ratione repudiandae
          laboriosam.
        </p>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
          voluptas facere nihil cupiditate, numquam aperiam sint qui adipisci
          aut? Iusto et temporibus tenetur quaerat ratione repudiandae
          laboriosam.
        </p>
        <blockquote>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
          commodi quae voluptates debitis quo saepe ratione sint alias
          perferendis et.
        </blockquote>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
          voluptas facere nihil cupiditate, numquam aperiam sint qui adipisci
          aut? Iusto et temporibus tenetur quaerat ratione repudiandae
          laboriosam, eligendi impedit sed quod neque nihil perspiciatis atque
          pariatur, rerum nisi delectus nobis porro excepturi sapiente, iste
          similique in quidem ea. Sequi!
        </p>
        <img src="/images/work/bmw.jpg" alt="alt" />
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
          voluptas facere nihil cupiditate, numquam aperiam sint qui adipisci
          aut? Iusto et temporibus tenetur quaerat ratione repudiandae
          laboriosam, eligendi impedit sed quod neque nihil perspiciatis atque
          pariatur, rerum nisi delectus nobis porro excepturi sapiente, iste
          similique in quidem ea. Sequi!
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            veritatis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            veritatis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            veritatis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            veritatis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            veritatis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            veritatis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            veritatis.
          </li>
        </ul>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
          voluptas facere nihil cupiditate, numquam aperiam sint qui adipisci
          aut? Iusto et temporibus tenetur quaerat ratione repudiandae
          laboriosam, eligendi impedit sed quod neque nihil perspiciatis atque
          pariatur, rerum nisi delectus nobis porro excepturi sapiente, iste
          similique in quidem ea. Sequi!
        </p>
        {/* Konec demo contentu */}
      </ContentFormater>

      <Wrapper size="lg" paddedContentTop="md" paddedContentBottom="lg">
        <CallToActionWide />
      </Wrapper>
    </>
  );
};

export default BlogDetail;
