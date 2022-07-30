import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Introduction from "../components/Introduction";
import NavBar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <Introduction />
      <About />
    </div>
  );
};

export default Home;
