import Head from "next/head";

import { Intro, Highlights } from "../sections";
import { Layout } from "../components";

export default function Index({ allPosts, newPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Welcome to my site | Niall Maher</title>
        </Head>
        <Intro />
        <Highlights posts={allPosts} newPosts={newPosts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY,
  });

  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const newPosts = await fetchEntries();

  return {
    props: { newPosts },
  };
}
