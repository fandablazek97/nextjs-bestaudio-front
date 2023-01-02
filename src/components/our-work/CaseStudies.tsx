import Button from "@ui/Button";
import FormCombobox from "@ui/FormCombobox";
import FormSelect from "@ui/FormSelect";
import CaseStudyCard from "./CaseStudyCard";
import { useState, useEffect } from "react";
import { config } from "@configs/site-config"

type CaseStudiesProps = {
  className?: string;
};

export const carBrands = [
  "Všechny značky",
  "Alfa Romeo",
  "Audi",
  "BMW",
  "Citroen",
  "Dacia",
  "Dodge",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Chevrolet",
  "Iveco",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lancia",
  "Land Rover",
  "Lamborghini",
  "Lexus",
  "Mazda",
  "Mercedes",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
  "Renault",
  "Saab",
  "Seat",
  "Subaru",
  "Suzuki",
  "Škoda",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

const carPacks = [
  "Všechny balíčky",
  "Balíček 1",
  "Balíček 2",
  "Balíček 3"
];

let data: any[] = [];

export default function CaseStudies({
  className = "",
}: CaseStudiesProps) {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [brand, setBrand] = useState<string>(carBrands[0]);
  const [pack, setPack] = useState<string>(carPacks[0]);
  const [hasItemsLeft, setHasItemsLeft] = useState<boolean>(true);
  const itemsAtStart = 6;
  const addItems = 3;
  const populateQuery = "?populate[0]=mainImage"
  const fieldsQuery = "&fields[0]=name&fields[1]=brand&fields[2]=model&fields[3]=perex";
  const sortQuery = "&sort[0]=id%3Adesc"
  let brandQuery = brand === carBrands[0] ? "" : "&filters[brand][$containsi]=" + brand;
  let packQuery = pack === carPacks[0] ? "" : "&filters[pack][$containsi]=" + pack;

  
  useEffect(() => {
    setHasItemsLeft(true);
    getData(0, itemsAtStart, true)
  }, [brand, pack])

  async function getData(currentAmount: number, addXItems: number, filterChanged: boolean) {
    let paginationQuery = "&pagination[start]=" + currentAmount + "&pagination[limit]=" + addXItems;
    await fetch(config.ipToFetch + "/api/jobs"
      + populateQuery
      + brandQuery
      + packQuery
      + paginationQuery
      + fieldsQuery
      + sortQuery
    )
      .then(response => response.json())
      .then((all) => {
        /* Pokud se to úspěšně připojilo */
        if (all.data !== undefined && all.data !== null) {
          /* Pokud zatím nejsou žádný data nebo se změnil filtr */
          if (data.length === 0 || filterChanged) {
            /* Pokud se v databázi nenašla žádná data podle parametrů */
            if (all.data.length === 0) {
              data = [];
              setRefresh(!refresh);
              setHasItemsLeft(false);
            }
            /* Pokud se našli data */
            else {
              data = all.data;
              setRefresh(!refresh);
              /* Pokud je stažených dat míň než bylo požádáno -> skryje tlačítko */
              if (all.data.length < currentAmount + addXItems) {
                setHasItemsLeft(false);
              }
            }
          }
          /* Pokud už existujou nějaký data */
          else {
            data.push(...all.data);
            setRefresh(!refresh);

            /* Pokud je dat míň než bylo požádáno -> skryje tlačítko */
            if (data.length < currentAmount + addXItems) {
              setHasItemsLeft(false);
            }
          }
        }
        /* Špatný připojení/požadavek */
        else {
          data = [];
          setRefresh(!refresh);
        }
      })
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-12 ml-auto flex flex-col justify-end gap-8 md:mb-16 md:max-w-xl md:flex-row">
        <FormCombobox
          label="Vyberte značku:"
          name="combobox"
          color="primary"
          options={carBrands}
          className="z-20"
          setOutsideFunction={setBrand}
        />
        <FormSelect
          label="Vyberte balíček:"
          name="select"
          color="primary"
          options={carPacks}
          className="z-10"
          setOutsideFunction={setPack}
        />
      </div>
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-y-24 xl:grid-cols-3 xl:gap-x-14">
        {data.map((item, i) => (
          <CaseStudyCard
            key={i}
            href={"nase-prace/" + item.id}
            imageSrc={item.attributes.mainImage.data.attributes.url}
            title={item.attributes.name}
            carBrand={item.attributes.brand}
            carModel={item.attributes.model}
            perex={item.attributes.perex}
            className="col-span-1"
          />
        ))}
      </div>
      <div className="mt-16 flex items-center justify-center lg:mt-28">
      {hasItemsLeft &&
        <Button 
          size="lg"
          onClick={() => getData(data.length, addItems, false)}
        >
          Načíst další
        </Button>
      }
      </div>
    </div>
  );
}
