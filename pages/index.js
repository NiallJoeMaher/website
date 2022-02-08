import Head from "next/head";
import { Layout, BobbleHead } from "../components";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>👋 Welcome to My Site | About Niall Maher.</title>
        <meta property="og:type" content="profile" />
      </Head>
      <div className="relative lg:mx-auto">
        <h1 className="font-extrabold text-5xl sm:text-7xl text-gray-900 mt-8 mb-16 sm:mt-16 sm:mb-28">
          Niall Maher
        </h1>

        <main className="text-gray-500 text-2xl">
          <div className="flex flex-col-reverse md:grid grid-cols-2">
            <div>
              <p className="mb-8">
                💫 I am a founder of{" "}
                <a
                  target="_blank"
                  className="fancy-pants-link"
                  href="https://myqu.io/"
                >
                  MyQu
                </a>
                , where we believe that{" "}
                <span className="font-semibold">
                  great people create great companies
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
                Version 1 company) as part of the leadership team and led the
                internal product{" "}
                <a
                  className="fancy-pants-link"
                  target="_blank"
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
                  target="_blank"
                  href="https://www.youtube.com/channel/UCvI5azOD4eDumpshr00EfIw"
                >
                  here
                </a>
                , <span className="font-semibold">Discord</span>{" "}
                <a
                  className="fancy-pants-link"
                  target="_blank"
                  href="https://discord.gg/fV5QsWSsM8"
                >
                  here
                </a>{" "}
                or the <span className="font-semibold">Meetup</span> group{" "}
                <a
                  className="fancy-pants-link"
                  target="_blank"
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
                to curate my favourite articles and thoughts on running a{" "}
                <span className="font-semibold">tech startup</span> and{" "}
                <span className="font-semibold">building stuff</span> that
                people love to use. If you are interested, sign up{" "}
                <Link href="/newsletter">
                  <a className="fancy-pants-link">here</a>
                </Link>
                .
              </p>
            </div>
            <div className="relative m-auto p-10 h-full w-full">
              <BobbleHead />
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
