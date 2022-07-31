import type { NextPage } from "next";
import SkillBar from "../components/SkillBar";
import styles from "../styles/Skills.module.css";

const Skills: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title__container}>
        <hr className={styles.separator} />
        <h2 className={styles.title}>My Skills</h2>
      </div>
      <div className={styles.text__container}>
        <SkillBar skill="Python" percentage={90} />
        <SkillBar skill="React" percentage={70} />
        <SkillBar skill="Javascript" percentage={75} />
        <SkillBar skill="NextJS" percentage={60} />
        <SkillBar skill="NodeJS" percentage={30} />
        <SkillBar skill="MongoDB" percentage={90} />
      </div>
    </div>
  );
};

export default Skills;
