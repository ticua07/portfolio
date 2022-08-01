import Aos from "aos";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import SkillBar from "../components/SkillBar";
import "aos/dist/aos.css";
import styles from "../styles/Skills.module.css";

const Skills: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 250 });
    Aos.refresh();
  });

  return (
    <div className={styles.container}>
      <div data-aos="fade-down">
        <div className={styles.title__container}>
          <h2 className={styles.title}>My Skills</h2>
        </div>
        <div className={styles.text__container}>
          <p className={styles.about__text}>
            People used to use skillbars to show their amazing skills
            <br />
            <span className={styles.keyword}>That time is over</span>,{" "}
            <i>Have a look at actual real projects.</i>
          </p>
        </div>
      </div>
      {/* <hr className={styles.separator} /> */}
      <div className={styles.project} data-aos="fade-left">
        <div className={styles.project__text}>
          <h1 className={styles.project__title}>MLScraper</h1>
          <div className={styles.project__text}>
            <p>Webscraper with UI, for looking at products in Mercado Libre</p>
            <p>Some of it&apos;s features are:</p>
            <ul>
              <li>
                Products are saved and restored when closing and opening the
                website.
              </li>
              <li>Shows if discounts are available.</li>
              <li>Mobile-friendly design with working responsiveness.</li>
            </ul>

            <p>
              Made with ReactJS and Fastapi. Used to be deployed on Heroku and
              Vercel
            </p>
          </div>
        </div>
        <Image
          src="/mlscraper.png"
          width={1000}
          className={styles.image}
          objectPosition="top"
          height={900}
          layout="intrinsic"
          objectFit="cover"
          alt="ml scraper github project"
        />
      </div>
    </div>
  );
};

export default Skills;
