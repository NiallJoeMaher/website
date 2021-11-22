import Head from "next/head";

import { Layout, HeroPost, Posts } from "../../components";

export default function Blog({ posts }) {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Niall Maher' Blog</title>
        </Head>
        <div className="relative mx-2 sm:mx-6 lg:mx-auto">
          <div>
            <h1 className="font-bold text-5xl sm:text-7xl text-gray-900 mt-8 mb-16 sm:mt-16 sm:mb-28">
              The Blog
            </h1>
          </div>
          <section>
            <HeroPost post={heroPost} />
            <Posts posts={morePosts} />
          </section>
        </div>
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
    const entries = await client.getEntries({
      order: "sys.createdAt",
    });
    if (entries.items) return entries.items.reverse();
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const posts = await fetchEntries();
  return {
    props: { posts },
  };
}
