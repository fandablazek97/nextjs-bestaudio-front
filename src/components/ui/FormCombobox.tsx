import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";

type FormComboboxProps = {
  options: string[];
  label: string;
  name: string;
  isRequired?: boolean;
  variant?: "filled" | "outlined";
  color?: "primary" | "secondary" | "accent" | "neutral";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  isLabelHidden?: boolean;
  className?: string;
};

const cvs = {
  base: "form-input w-full py-2.5 px-3 text-base outline-none",
  isDisabled: "cursor-not-allowed opacity-60",
  isInvalid: "!border-error-active",
  variant: {
    filled: "text-copy-rich bg-body-100 border border-body-100 focus:bg-body",
    outlined: "text-copy-rich bg-body border border-body-200 focus:bg-body",
  },
  color: {
    primary: "focus:border-primary focus:ring focus:ring-primary",
    secondary: "focus:border-secondary focus:ring focus:ring-secondary",
    accent: "focus:border-accent focus:ring focus:ring-accent",
    neutral: "focus:border-neutral focus:ring focus:ring-neutral",
  },
  options: {
    primary: "bg-primary text-primary-content",
    secondary: "bg-secondary text-secondary-secondary",
    accent: "bg-accent text-accent-content",
    neutral: "bg-neutral text-neutral-content",
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
};

export default function FormCombobox({
  options = [
    "Fanda",
    "Libor",
    "Marie",
    "Kuba",
    "Vláďa",
    "Dominik",
    "Adam",
    "Radek",
  ],
  name = "combobox_name",
  label = "Label text",
  isRequired = false,
  variant = "outlined",
  color = "primary",
  radius = "md",
  isLabelHidden = false,
  className = "",
}: FormComboboxProps) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as={"div"}
      value={selectedOption}
      onChange={setSelectedOption}
      className={`w-full ${className}`}
    >
      <Combobox.Label
        className={`${
          isLabelHidden
            ? "sr-only"
            : "mb-2 block max-w-max text-sm font-medium text-copy"
        }`}
      >
        <span>{label}</span>
        {isRequired && <span className="text-error">*</span>}
      </Combobox.Label>
      <div className="relative z-10 w-full">
        <Combobox.Input
          name={name}
          onChange={(event) => setQuery(event.target.value)}
          className={`
            ${cvs.base}
            ${cvs.variant[variant]} 
            ${cvs.color[color]}
            ${cvs.radius[radius]}
          `}
        />
        <Combobox.Button
          className={`absolute top-1/2 right-3 -translate-y-1/2`}
        >
          <HiChevronUpDown className="text-2xl text-copy" />
        </Combobox.Button>
        <Combobox.Options
          className={`absolute left-0 right-0 top-14 max-h-96 w-full overflow-y-scroll bg-body-100 py-1 ${cvs.radius[radius]}`}
        >
          {filteredOptions.map((option) => (
            <Combobox.Option key={option} value={option} className={`py-2`}>
              {({ active, selected }) => (
                <li
                  className={`flex items-center justify-start gap-2 py-2 px-3 ${
                    active ? cvs.options[color] : ""
                  }`}
                >
                  {selected && <HiCheck className="h-5 w-5 text-lg" />}
                  <span className={`block ${!selected ? "pl-7" : ""}`}>
                    {option}
                  </span>
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}
