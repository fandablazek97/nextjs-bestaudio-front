type BlogFilterProps = {
  className?: string;
  [x: string]: any;
};

const FilterOptions = [
  "Vše",
  "Kategorie 1",
  "Kategorie 2",
  "Kategorie 3",
  "Kategorie 4",
];

export default function BlogFilter({
  className = "",
  ...rest
}: BlogFilterProps) {
  // Logic goes here
  return (
    <ul
      role={"list"}
      className={`flex w-full items-center justify-start gap-5 overflow-x-auto lg:gap-8 ${className}`}
      {...rest}
    >
      {FilterOptions.map((option) => (
        <li key={option}>
          <button className="font-medium focus-visible:ring-4 focus-visible:ring-copy-rich/70">
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
