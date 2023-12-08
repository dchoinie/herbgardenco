import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import AnnouncementBar from "../components/announcementBar";

const Home: React.FC<PageProps> = () => {
  return (
    <>
      <AnnouncementBar />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>;
