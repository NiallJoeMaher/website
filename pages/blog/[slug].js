import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { BioFooter } from "../../components";
import PostHeader from "../../components/post-header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import PostTitle from "../../components/post-title";

import { Layout } from "../../components";

import styles from "./blog.module.css";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      const { url } = file;
      return <img alt={title} src={`https:${url}`} />;
    },
  },
};

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <div className="">
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className={styles["post"]}>
              <Head>
                <title>{post.title}</title>
                <meta key="og:title" property="og:title" content={post.title} />
                <meta
                  key="og:image"
                  property="og:image"
                  content={`https:${post.ogImage.fields.file.url}`}
                />
                <meta
                  key="og:description"
                  property="og:description"
                  content={post.excerpt}
                />
                <meta
                  key="description"
                  property="description"
                  content={post.excerpt}
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://niall.af/blog" />
              </Head>
              <div className="mx-auto">
                <PostHeader
                  title={post.title}
                  coverImage={`https:${post.coverImage.fields.file.url}`}
                  date={post.date}
                />
              </div>
              {documentToReactComponents(post.content, options)}
            </article>
            <BioFooter />
          </>
        )}
      </div>
    </Layout>
  );
}

async function getContentfulPosts() {
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

  return newPosts;
}

export async function getStaticProps({ params }) {
  const newPosts = await getContentfulPosts();

  const newPost = newPosts.filter((post) => {
    return post.fields.slug === params.slug;
  });

  return {
    props: {
      post: {
        ...newPost[0].fields,
        content: newPost[0].fields.body,
      },
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const newPosts = await getContentfulPosts();

  return {
    paths: newPosts.map((post) => {
      return {
        params: {
          slug: post.fields.slug,
        },
      };
    }),
    fallback: false,
  };
}
