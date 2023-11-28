import car1 from "../img/mercedes-amg-gt-coupe-renderings-removebg-preview.png";
import car2 from "../img/bmw-m8-competition-gran-coupe-inform-sd-first-edition-01-removebg-preview.png";
import car3 from "../img/2018-4Runner-Limited-removebg-preview.png";

const recommendCars = [
  {
    id: "01",
    carName: "AMG",
    rentPrice: 32,
    retweet: "132",
    imgUrl: car1,
    percentage: "83",
    color:"bg-gray-500",
  },
  {
    id: "03",
    carName: "Toyota Highland",
    rentPrice: 28,
    retweet: "130",
    imgUrl: car3,
    percentage: "70",
    color:"bg-blue-400",
  },
  {
    id: "03",
    carName: "BMW m8 competition",
    rentPrice: 28,
    retweet: "130",
    imgUrl: car2,
    percentage: "80",
    color:"bg-gray-600",
  },
  {
    id: "04",
    carName: "Toyota Highland",
    rentPrice: 28,
    retweet: "130",
    imgUrl: car3,
    percentage: "70",
    color:"bg-green-600",
  },
];

export default recommendCars;