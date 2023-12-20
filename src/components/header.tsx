import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { NavItem } from "../types/common";
import Container from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const navItems = [
  {
    name: "shop",
    display: "Shop",
    path: "/shop",
  },
  {
    name: "education",
    display: "Education",
    path: "/education",
  },
  {
    name: "about",
    display: "About",
    path: "/about",
  },
  {
    name: "cotact",
    display: "Contact",
    path: "/contact",
  },
  {
    name: "account",
    display: <FontAwesomeIcon icon={faUser} />,
    path: "/account",
  },
  {
    name: "cart",
    display: <FontAwesomeIcon icon={faCartShopping} />,
    path: "/cart",
  },
];

const Header = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <Container>
      <div className="flex justify-between py-4">
        <GatsbyImage
          image={data.logo.childImageSharp.gatsbyImageData}
          alt="Logo"
          className="w-20"
        />
        <div className="flex items-center">
          {navItems.map((item: NavItem) => (
            <Link key={item.name} to={item.path} className="mr-10 last:mr-0">
              {item.display}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Header;
