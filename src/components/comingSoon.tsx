import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const ComingSoon = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query ComingSoonQuery {
      logo: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <GatsbyImage
        image={data.logo.childImageSharp.gatsbyImageData}
        alt="Logo"
        className="self-center w-32"
      />
      <h1 className="text-gray-800 text-3xl my-6">Website Coming Soon...</h1>
      <p className="text-gray-700">
        Derek Rux | 507-339-0521 | derekrux@herbgardenco.com
      </p>
    </div>
  );
};

export default ComingSoon;
