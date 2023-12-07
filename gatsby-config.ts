import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Herb Garden Co.`,
    description: `Reselling hemp derived THC edibles produced by a licensed manufacturer`,
    siteUrl: `https://www.herbgardenco.com`,
    address: `11352 131st Cir N, Dayton, MN 55327`,
    phone: `507-339-0521`,
    email: `derekrux@herbgardenco.com`,
    image: `./src/assets/images/Logo.png`,
    keywords: `hemp, THC, edibles, gummy, gummies, Minnesota`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     "url": ""
    //   }
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: "./src/assets/videos/",
      },
      __key: "videos",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "documents",
        path: "./src/assets/documents/",
      },
      __key: "documents",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/Favicon.png",
      },
    },
  ],
};

export default config;
