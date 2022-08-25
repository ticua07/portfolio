import styles from "../styles/SkillsIntro.module.css";

export default function SkillsIntroduction() {
  return (
    <div className={styles.container}>
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
  );
}
