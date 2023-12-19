import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import AnnouncementBar from "../components/announcementBar";
import HomeProducts from "../components/homeProducts";
import Benefits from "../components/benefits";
import ComingSoon from "../components/comingSoon";

const Home: React.FC<PageProps> = () => {
  return (
    <>
      {/* <ComingSoon /> */}
      <AnnouncementBar />
      <Layout>
        <Hero />
        <HomeProducts />
        <Benefits />
      </Layout>
    </>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>;
