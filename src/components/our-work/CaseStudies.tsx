import Button from "@ui/Button";
import FormCombobox from "@ui/FormCombobox";
import FormSelect from "@ui/FormSelect";
import CaseStudyCard from "./CaseStudyCard";
import { useState } from "react";
import { carBrands, carPacks } from "@configs/brands-packs";

type CaseStudiesProps = {
  className?: string;
  data: any;
  pack: string;
  brand: string;
};

export default function CaseStudies({
  className = "",
  data,
  pack,
  brand,
}: CaseStudiesProps) {
  const addItems = 3;
  const [showedItems, setShowedItems] = useState<number>(12);

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-12 ml-auto flex flex-col justify-end gap-8 md:mb-16 md:max-w-xl md:flex-row">
        <FormCombobox
          label="Vyberte značku:"
          name="combobox"
          color="primary"
          options={carBrands}
          className="z-20"
          preselected={brand}
          pack={pack}
        />
        <FormSelect
          label="Vyberte balíček:"
          name="select"
          color="primary"
          options={carPacks}
          className="z-10"
          preselected={pack}
          brand={brand}
        />
      </div>
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-y-24 xl:grid-cols-3 xl:gap-x-14">
        {data.map(
          (item: any, i: number) =>
            i < showedItems && (
              <CaseStudyCard
                key={i}
                href={"/nase-prace/detail/" + item.id}
                imageSrc={item.attributes.mainImage.data.attributes.url}
                title={item.attributes.name}
                carBrand={item.attributes.brand}
                carModel={item.attributes.model}
                perex={item.attributes.perex}
                pack={item.attributes.pack}
                className="col-span-1"
              />
            )
        )}
        {!data.length && (
          <div className="w-full col-span-3 px-4 py-8 bg-error/10 border border-error rounded-2xl flex items-center justify-center">
            <p className="text-lg sm:text-xl text-center font-semibold text-error">Bohužel, zvoleným parametrům neodpovídají žádné příspěvky</p>
          </div>
        )}
      </div>
      <div className="mt-16 flex items-center justify-center lg:mt-28">
        {data.length > showedItems && (
          <Button
            size="lg"
            onClick={() => setShowedItems(showedItems + addItems)}
          >
            Načíst další
          </Button>
        )}
      </div>
    </div>
  );
}
