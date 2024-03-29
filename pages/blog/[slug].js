import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { BioFooter } from "../../components";
import PostHeader from "../../components/post-header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { getContentfulPostBySlug } from "../../lib/api";

import PostTitle from "../../components/post-title";

import { Layout } from "../../components";

import styles from "./blog.module.css";

const options = {
  renderMark: {
    [MARKS.CODE]: (text) => {
      return (
        <pre className="inline">
          <code className="inline">{text}</code>
        </pre>
      );
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const hasCodeInline = node.content[0]?.marks?.some((markObj) => {
        return markObj.type === "code";
      });
      if (node.content.length === 1 && hasCodeInline) {
        return (
          <div className="code-block block">
            <pre>
              <code>{node.content[0].value}</code>
            </pre>
          </div>
        );
      }

      return <p>{children}</p>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title, description } = node.data.target.fields;
      const { url } = file;
      return (
        <figure className="my-4">
          <img className="mx-auto" alt={title} src={`https:${url}`} />
          <figcaption className="mx-16 mt-4 text-center text-slate-500 text-sm">
            {description}
          </figcaption>
        </figure>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      if (node.data.uri.includes("youtube.com/embed/")) {
        return (
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full shadow-xl"
              src={node.data.uri}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      }
      return (
        <a
          target={`${node.data.uri.includes("niall.af") ? "_self" : "_blank"}`}
          href={node.data.uri}
        >
          {children}
        </a>
      );
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
            <article className={styles["post"]}>
              <div>
                <PostHeader
                  title={post.title}
                  coverImage={`https:${post.coverImage.fields.file.url}`}
                  date={post.date}
                />
              </div>
              <div>{documentToReactComponents(post.content, options)}</div>
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

export async function getStaticProps({ params, preview }) {
  const post = await getContentfulPostBySlug(params.slug, preview);

  return {
    props: {
      post: {
        ...post.fields,
        content: post.fields.body,
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
