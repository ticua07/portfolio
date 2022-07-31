import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import About from "../components/About";
import Introduction from "../components/Introduction";
import NavBar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script src="https://use.fontawesome.com/80581a26d1.js"></Script>
      <NavBar />
      <Introduction />
      <About />
    </div>
  );
};

export default Home;
