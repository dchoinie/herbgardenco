import React from "react";
import BlackberryImg from "../assets/images/IMG_0825.jpg";
import PineappleImg from "../assets/images/IMG_0824.jpg";
import Container from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import SectionHeading from "./sectionHeading";

interface Product {
  name: string;
  price: number;
  image: any;
  flavor: string;
  description: string;
  path: string;
}

const demoProducts = [
  {
    name: "Nighttime Gummy",
    price: 35,
    image: BlackberryImg,
    flavor: "Blackberry",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam hic sequi, ratione facere ad.",
    path: "/",
  },
  {
    name: "Daytime Gummy",
    price: 35,
    image: PineappleImg,
    flavor: "Mango/Green Tea",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam hic sequi, ratione facere ad.",
    path: "/",
  },
];

const HomeProducts = (): JSX.Element => {
  return (
    <Container>
      <div className="flex flex-col h-screen justify-center">
        <SectionHeading title="Our Products" />
        <div className="flex justify-center gap-24">
          {demoProducts.map((product: Product) => (
            <div className="flex flex-col mt-12">
              <img
                src={product.image}
                alt={product.name}
                className="h-[350px] w-[450px] rounded shadow mb-3"
              />
              <div className="flex w-full justify-between">
                <div className="flex flex-col">
                  <h2 className="text-gray-800 tracking-wide text-xl">
                    {product.name}
                  </h2>
                  <p className="text-gray-600">{product.flavor}</p>
                </div>
                <p className="font-bold">{`$${Number(product.price).toFixed(
                  2
                )}`}</p>
              </div>
              <Link
                to={product.path}
                className="flex border border-primary rounded text-primary shadow py-2 w-32 justify-center mt-6 hover:bg-primary hover:text-white"
              >
                <span>View</span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="self-center ml-2"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomeProducts;
