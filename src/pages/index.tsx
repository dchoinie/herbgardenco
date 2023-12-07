import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const Home: React.FC<PageProps> = () => {
  return <div>Home</div>;
};

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>;
