import Button from "@ui/Button";
import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";
import copy from "copy-to-clipboard";
import { IoCopy, IoNavigate } from "react-icons/io5";
import { toast } from "react-toastify";

type Props = {
  className?: string;
};

export default function MapAdress({ className = "" }: Props) {
  const notify = () => toast("Adresa byla zkopírována do schránky");
  return (
    <>
      <Wrapper
        size="md"
        paddedContentTop="md"
        className={`flex flex-col gap-10 lg:gap-20 ${className}`}
      >
        <Heading as="h2" size="xl" color="primary">
          Kudy k nám?
        </Heading>

        {/* Otevírací doba */}
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <Heading as="h3" size="md">
            Otevírací doba
          </Heading>
          <p>úterý - pátek 10:00 - 16:00 (nebo dle domluvy)</p>
        </div>

        {/* Adresa + buttony */}
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-1 flex flex-col items-start justify-start gap-2">
            <Heading as="h3" size="md">
              Adresa
            </Heading>
            <p>Písecká 1307/19, 326 00 Plzeň 2-Slovany</p>
          </div>
          <div className="col-span-1 flex items-center justify-start gap-10 xl:col-span-2">
            <Button
              as={"button"}
              size="lg"
              isIconBox={true}
              aria-label="Zkopírovat adresu"
              onClick={() => {
                copy("Písecká 1307/19, 326 00 Plzeň 2-Slovany");
                notify();
              }}
            >
              <IoCopy />
            </Button>
            <Button
              as={"a"}
              href="https://www.google.com/maps/dir//P%C3%ADsecká+1307%2F19,+326+00+Plzeň+2-Slovany/@49.7056498,13.4233127,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x470aefbdc5a6b0ff:0xd68c737baccaf746!2m2!1d13.4255014!2d49.7056498!3e0"
              target={"_blank"}
              rel="noopenner noreferrer"
              isIconBox={true}
              size="lg"
            >
              <IoNavigate />
            </Button>
          </div>
        </div>
      </Wrapper>

      {/* Mapa iframe */}
      <Wrapper size="lg" paddedContentTop="sm" paddedContentBottom="lg">
        <div className="aspect-square w-full bg-body-200 object-cover sm:aspect-video">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=P%C3%ADseck%C3%A1%201307/19,%20326%2000%20Plze%C5%88%202-Slovany&t=k&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </Wrapper>
    </>
  );
}
