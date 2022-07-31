import styles from "../styles/SkillBar.module.css";

type Props = {
  skill: string;
  percentage: number;
};

const SkillBar: React.FC<Props> = ({ skill, percentage }) => {
  const width = percentage.toString() + "%";

  return (
    <div className={styles.container}>
      <p className={styles.skill}>{skill}</p>
      <div className={styles.bar__container}>
        <div className={styles.bar__completed} style={{ width: width }}></div>
      </div>
      <p className={styles.percentage}>{width}</p>
    </div>
  );
};

export default SkillBar;
