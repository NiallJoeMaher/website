import Head from "next/head";
import Image from "next/image";

import showing from "../../public/images/showing.webp";

import { Layout } from "../../components";

export default function Podcast({ data }) {
  const labels = {
    spotify: "Spotify",
    apple_podcasts: "Apple Podcasts",
    google_podcasts: "Google Podcasts",
    amazon_music: "Amazon Music",
    podcast_addict: "Podcast Addict",
    pocket_casts: "Pocket Casts",
    overcast: "Overcast",
    deezer: "Deezer",
    player_FM: "Player FM",
    podcast_addict: "Podcast Addict",
    castro: "Castro",
    castbox: "Castbox",
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Startups with Niall Maher</title>
          <meta
            key="og:title"
            property="og:title"
            content="Startups with Niall Maher."
          />
          <meta
            key="og:description"
            property="og:description"
            content="All the links to Startups with Niall Maher."
          />
          <meta
            key="description"
            property="description"
            content="All the links to Startups with Niall Maher."
          />
          <meta property="og:url" content="https://niall.af/podcast" />
        </Head>
        <section className="relative my-20 mx-2 sm:mx-6 lg:mx-auto">
          <h1 className="font-extrabold text-5xl sm:text-7xl text-gray-900 mt-8 mb-16 sm:mt-16 sm:mb-28">
            Startups with Niall Maher
          </h1>
          <div className="lg:grid grid-cols-2 gap-10">
            <div>
              <p className="mb-8 tracking-tight text-gray-500 text-xl sm:text-2xl">
                Welcome to{" "}
                <span className="font-semibold">Startups with Niall Maher</span>
                .
              </p>
              <p className="mb-8 tracking-tight text-gray-500 text-xl sm:text-2xl">
                This show is to going give you tips, strategies and advice to
                grow your business and hopefully entertain you along the way.
              </p>
              <p className="mb-8 tracking-tight text-gray-500 text-xl sm:text-2xl">
                New episodes on{" "}
                <span className="font-semibold">Tuesday mornings</span>.
              </p>
              <h3 className="mb-8 tracking-tight text-gray-800 text-3xl font-extrabold">
                Listen to the trailer 👇
              </h3>
              <div>
                <iframe
                  className="shadow"
                  width="100%"
                  height="180"
                  frameBorder="no"
                  scrolling="no"
                  seamless
                  src="https://share.transistor.fm/e/a3356011"
                ></iframe>
              </div>
              <h3 className="mb-8 mt-12 tracking-tight text-gray-800 text-3xl font-extrabold">
                🎧 Listen on your favourite player
              </h3>

              <div className="flex flex-wrap">
                {Object.keys(labels).map((label) => {
                  if (data[label])
                    return (
                      <a
                        key={labels[label]}
                        className="block border text-base border-slate-300 px-4 py-2 rounded mr-2 mb-2 bg-white shadow hover:shadow-md text-slate-700 font-semibold"
                        href={data[label]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {labels[label]}
                      </a>
                    );
                })}
              </div>
            </div>
            <div className="relative">
              <h3 className="mb-8 tracking-tight text-gray-800 text-3xl font-extrabold">
                Episodes
              </h3>
              <iframe
                className="shadow"
                width="100%"
                height="390"
                frameBorder="no"
                scrolling="no"
                seamless
                src="https://share.transistor.fm/e/startups-with-niall-maher/playlist"
              ></iframe>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  async function fetchEntries() {
    const response = await fetch("https://api.transistor.fm/v1/shows/27973", {
      headers: { "x-api-key": process.env.TRANSISTOR_FM },
    });
    const showData = response.json();
    return showData;
  }

  const showData = await fetchEntries();
  return {
    props: { data: showData.data.attributes },
  };
}
