import Head from "next/head";
import { Layout } from "../components";
import Image from "next/image";
import Link from "next/link";

export default function Index({ allPosts, newPosts }) {
  return (
    <Layout>
      <Head>
        <title>👋 Welcome to my site | Niall Maher</title>
      </Head>
      <div className="relative mx-2 sm:mx-6 lg:mx-auto">
        <div>
          <h1 className="font-bold text-5xl sm:text-7xl text-gray-900 mt-8 mb-16 sm:mt-16 sm:mb-28">
            Niall Maher
          </h1>
        </div>
        <main className="text-gray-500 text-2xl">
          <div className="grid grid-cols-2">
            <div>
              <p className="mb-8">
                💫 I am a founder of{" "}
                <a className="fancy-pants-link" href="https://myqu.io/">
                  MyQu
                </a>
                , where we believe{" "}
                <span className="font-semibold">
                  that great people create great companies
                </span>
                , and we help companies win in business by helping to hire great
                people.
              </p>
              <p className="mb-8">
                ✏️ I've worked in nearly every corner of technology businesses;
                Lead Developer, Software Architect, Product Manager, CTO and now
                happily a Founder.
              </p>
              <p className="mb-8">
                Worked on the successful acquisition of Singlepoint (now a
                Version 1 company) as part of the leadership team within
                Singlepoint and led the internal product{" "}
                <a
                  className="fancy-pants-link"
                  href="https://aws.amazon.com/es/solutions/consulting-offers/version1-designandbuild-applications-with-dapx/"
                >
                  DAPx
                </a>
                . ✌
              </p>
              <p className="mb-8">
                I run one of the largest coding communities 👨‍💻 in Ireland, the{" "}
                <span className="font-semibold">Codú Community</span>. You can
                find the <span className="font-semibold">YouTube</span> channel{" "}
                <a
                  className="fancy-pants-link"
                  href="https://www.youtube.com/channel/UCvI5azOD4eDumpshr00EfIw"
                >
                  here
                </a>
                , <span className="font-semibold">Discord</span>{" "}
                <a
                  className="fancy-pants-link"
                  href="https://discord.gg/fV5QsWSsM8"
                >
                  here
                </a>{" "}
                or the MeetUp group{" "}
                <a
                  className="fancy-pants-link"
                  href="https://www.meetup.com/codu-community/"
                >
                  here
                </a>
                .
              </p>
              <p className="mb-8">
                I write a{" "}
                <Link href="/newsletter">
                  <a className="fancy-pants-link">newsletter</a>
                </Link>{" "}
                to curate my favourite articles, thoughts, and{" "}
                <span className="font-semibold">
                  tips for building a successful tech startup
                </span>
                . If you are interested, sign up{" "}
                <Link href="/newsletter">
                  <a className="fancy-pants-link">here</a>
                </Link>
                .
              </p>
            </div>
            <div className="relative m-auto">
              <Image
                className="filter drop-shadow-md"
                width="420"
                height="420"
                src="/images/headshot.png"
                alt="Niall Maher's headshot"
              />
            </div>
          </div>
        </main>
      </div>
    </Layout>
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
