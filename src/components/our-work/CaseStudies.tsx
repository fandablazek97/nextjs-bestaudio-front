import Button from "@ui/Button";
import FormCombobox from "@ui/FormCombobox";
import FormSelect from "@ui/FormSelect";

type CaseStudiesProps = {
  className?: string;
  children?: React.ReactNode;
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

export default function CaseStudies({
  className = "",
  children,
}: CaseStudiesProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="mb-12 ml-auto flex flex-col justify-end gap-8 md:mb-16 md:max-w-xl md:flex-row">
        <FormCombobox
          label="Vyberte značku:"
          name="combobox"
          color="primary"
          options={carBrands}
        />
        <FormSelect
          label="Vyberte balíček:"
          name="select"
          color="primary"
          options={["Všechny balíčky", "Balíček 1", "Balíček 2", "Balíček 3"]}
        />
      </div>
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-y-24 xl:grid-cols-3 xl:gap-x-14">
        {children}
      </div>
      <div className="mt-16 flex items-center justify-center lg:mt-28">
        <Button size="lg">Načíst další</Button>
      </div>
    </div>
  );
}
