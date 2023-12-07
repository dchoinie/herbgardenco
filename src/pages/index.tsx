import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const Home: React.FC<PageProps> = () => {
  return <Layout></Layout>;
};

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>;
