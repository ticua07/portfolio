import type { NextPage } from "next";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title__container}>
        <h2 className={styles.title}>About</h2>
        <hr className={styles.separator} />
      </div>
      <div className={styles.text__container}>
        <p className={styles.about__text}>
          I am <span className={styles.keyword}>junior</span> web developer from{" "}
          <span className={styles.keyword}>Argentina</span>
        </p>
        <p className={styles.about__text}>
          with high interest on building{" "}
          <span className={styles.keyword}>full-fledged web apps</span>
        </p>
        <p className={styles.about__text}>
          using all kinds of{" "}
          <span className={styles.keyword}>technologies</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
