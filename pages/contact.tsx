import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import NavBar from "../sections/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script src="https://use.fontawesome.com/80581a26d1.js"></Script>
      <NavBar />
    </div>
  );
};

export default Home;
