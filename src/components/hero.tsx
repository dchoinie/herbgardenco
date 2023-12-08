import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import cx from "classnames";
import * as styles from "../styles/hero.module.css";
import Container from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Hero = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      hero: file(relativePath: { eq: "IMG_0834.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      textLogo: file(relativePath: { eq: "text_logo.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <div className={styles.bgImg}>
      <Container>
        <div className={cx(styles.hero, "flex justify-center")}>
          <div className="flex flex-col justify-center text-center bg-white/90 self-center p-20 shadow-lg rounded">
            <h1 className="flex flex-col text-6xl font-bold uppercase">
              <span className="text-primary">Herb</span>
              <span className="text-secondary">Garden Co.</span>
            </h1>
            <h3 className="text-2xl text-gray-800 mt-2 mb-8">
              Hemp derived THC edibles
            </h3>
            <div className="flex gap-3 justify-center">
              <Link
                to="/shop"
                className="flex bg-primary text-white shadow rounded py-2 w-32 justify-center"
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="self-center"
                />
                <span className="ml-2">Shop</span>
              </Link>
              <Link
                to="/education"
                className="flex border border-secondary text-secondary shadow rounded py-2 w-32 justify-center"
              >
                <span className="mr-2">Learn More</span>
                <FontAwesomeIcon icon={faAngleRight} className="self-center" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
