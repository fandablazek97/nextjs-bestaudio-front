import Button from "@ui/Button";
import Heading from "@ui/Heading";
import Wrapper from "@ui/Wrapper";
import copy from "copy-to-clipboard";
import { IoCopy, IoNavigate } from "react-icons/io5";
import { toast } from "react-toastify";
import { config } from "@configs/site-config";

type Props = {
  className?: string;
};

export default function MapAdress({ className = "" }: Props) {
  const notify = () => toast("Adresa byla zkopírována do schránky");
  return (
    <>
      <Wrapper
        as={"section"}
        id="kudy-k-nam"
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
          <p>
            pondělí – čtvrtek 8:00 – 17:00 (nebo dle dohody) <br />
            pátek 8:00 – 14:00
          </p>
        </div>

        {/* Adresa + buttony */}
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-1 flex flex-col items-start justify-start gap-2">
            <Heading as="h3" size="md">
              Adresa
            </Heading>
            <p>{config.legal.showroom.adress}</p>
          </div>
          <div className="col-span-1 flex items-center justify-start gap-10 xl:col-span-2">
            <Button
              as={"button"}
              size="lg"
              isIconBox={true}
              aria-label="Zkopírovat adresu"
              onClick={() => {
                copy(config.legal.showroom.adress);
                notify();
              }}
            >
              <IoCopy />
            </Button>
            <Button
              as={"a"}
              href="https://www.google.com/maps/place/Pař%C3%ADžská+10,+301+00+Plzeň+3/@49.7425605,13.3799799,17z/data=!3m1!4b1!4m5!3m4!1s0x470af1e1527e1f73:0x545b7ba912a2eda0!8m2!3d49.7425605!4d13.3825548"
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
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%C2%A0Pa%C5%99%C3%AD%C5%BEsk%C3%A1%2010,%20301%2000%20Plze%C5%88%203+(Showroom)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </Wrapper>
    </>
  );
}
