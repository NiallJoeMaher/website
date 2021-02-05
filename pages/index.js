import { getAllPosts } from "../lib/api";
import Head from "next/head";

import { Intro, Highlights } from "../sections";
import { Layout } from "../components";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Welcome to my site | Niall Maher</title>
        </Head>
        <Intro />
        <Highlights posts={allPosts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
