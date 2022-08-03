import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import About from "../sections/About";
import Introduction from "../sections/Introduction";
import NavBar from "../sections/Navbar";
import Skills from "../sections/Skills";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | Ticua</title>
        <meta
          name="description"
          content="I am a full-stack web developer from Argentina"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script src="https://use.fontawesome.com/80581a26d1.js"></Script>
      <NavBar />
      <Introduction />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
