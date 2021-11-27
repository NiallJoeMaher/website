import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Articles and thoughts on running a tech startup and building stuff that people love to use.`}
        key="description"
      />
      <meta
        name="og:description"
        content={`Articles and thoughts on running a tech startup and building stuff that people love to use.`}
        key="og:description"
      />
      <meta
        name="og:title"
        content={`Niall Maher | On building scalable startups.`}
        key="og:title"
      />
      <meta
        property="og:image"
        content="/images/og/home-og.png"
        key="og:image"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://niall.af" />
    </Head>
  );
}
