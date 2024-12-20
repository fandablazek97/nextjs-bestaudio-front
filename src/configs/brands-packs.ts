import { cars } from "./car-brands";


const carBrandNames = cars.map((car) => car.name);

export const carBrands = [
  "Všechny značky",
  ...carBrandNames,
];


function convertNameToSlug(name: string) {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_");
}

export const carBrandsForNavigation = [
  "",
  ...carBrandNames.map(convertNameToSlug),
  // "Alfa_Romeo",
  // "Audi",
  // "BMW",
  // "Citroen",
  // "Dacia",
  // "Dodge",
  // "Fiat",
  // "Ford",
  // "Honda",
  // "Hyundai",
  // "Chevrolet",
  // "Iveco",
  // "Jaguar",
  // "Jeep",
  // "Kia",
  // "Lancia",
  // "Land Rover",
  // "Lamborghini",
  // "Lexus",
  // "Mazda",
  // "Mercedes",
  // "Mini",
  // "Mitsubishi",
  // "Nissan",
  // "Opel",
  // "Peugeot",
  // "Renault",
  // "Saab",
  // "Seat",
  // "Subaru",
  // "Suzuki",
  // "Skoda",
  // "Tesla",
  // "Toyota",
  // "Volkswagen",
  // "Volvo",
];

export const carPacks = [
  "Všechny balíčky",
  "Stage 1",
  "Stage 2",
  "Premium",
  "High-End",
];

export const carPacksForNavigation = [
  "",
  "Stage_1",
  "Stage_2",
  "Premium",
  "High-End",
];