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
      <a
        href="https://github.com/ticua07/ml-scraper-backend"
        rel="noreferrer"
        target="_blank"
      >
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <section className={styles.content}>
              <h1 className={styles.project__title}>MELI Scraper</h1>
              <div className={styles.project__text}>
                <p>
                  Web scraper with UI, for looking at products in Mercado Libre
                </p>
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
                  Made with ReactJS and Fastapi. Used to be deployed on Heroku
                  and Vercel
                </p>
              </div>
            </section>
          </div>
        </div>
      </a>
      <a
        href="https://github.com/ticua07/ml-scraper-backend"
        rel="noreferrer"
        target="_blank"
      >
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <section className={styles.content}>
              <h1 className={styles.project__title}>MELI Scraper</h1>
              <div className={styles.project__text}>
                <p>
                  Web scraper with UI, for looking at products in Mercado Libre
                </p>
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
                  Made with ReactJS and Fastapi. Used to be deployed on Heroku
                  and Vercel
                </p>
              </div>
            </section>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Skills;
