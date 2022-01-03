import Head from "next/head";

import { Layout, HeroPost, Posts } from "../../components";

export default function Blog({ posts }) {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>
            ✍️ Blog | Tech Startups and Building Products People Love.
          </title>
          <meta
            key="og:title"
            property="og:title"
            content="Niall Maher's Blog on building products people love."
          />
          <meta
            key="og:image"
            property="og:image"
            content="/images/og/blog-og.png"
          />
          <meta
            key="og:description"
            property="og:description"
            content="Blog articles and thoughts on running a tech startup and building stuff that people love to use."
          />
          <meta
            key="description"
            property="description"
            content="Blog articles and thoughts on running a tech startup and building stuff that people love to use."
          />
          <meta property="og:url" content="https://niall.af/blog" />
        </Head>
        <div className="relative lg:mx-auto">
          <h1 className="font-extrabold text-5xl sm:text-7xl text-gray-900 mt-8 mb-16 sm:mt-16 sm:mb-28">
            The Blog
          </h1>
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
    if (entries.items)
      return entries.items.sort((a, b) => {
        return new Date(b.fields.date) - new Date(a.fields.date);
      });
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const posts = await fetchEntries();
  return {
    props: { posts },
  };
}
