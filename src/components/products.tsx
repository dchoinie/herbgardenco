import { useStaticQuery, graphql } from "gatsby";
import React from "react";

const Products = (): JSX.Element => {
  const data: any = useStaticQuery(graphql`
    query ProductsQuery {
      allWcProducts {
        nodes {
          id
          name
          price
          slug
          stock_quantity
          sale_price
        }
      }
    }
  `);
  console.log(data);

  return <div>Products</div>;
};

export default Products;
