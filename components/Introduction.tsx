import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Introduction.module.css";

const Introduction: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.pfp}
        src="/../public/pfp.webp"
        alt="profile"
        height={192}
        width={192}
      />

      <h1 className={styles.name}>Ticua</h1>
    </div>
  );
};

export default Introduction;
