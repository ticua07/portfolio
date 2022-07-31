import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "../styles/Introduction.module.css";

const Introduction: NextPage = () => {
  const player = useRef(null);

  useEffect(() => {
    // @ts-ignore
    player.current.src = "../public/Meow - Sound Effect-6wvFozENHb8.mp3";
    // player.current.play();
  }, []);

  return (
    <div className={styles.container}>
      <audio ref={player} />
      <div>
        <Image
          onClick={() => {
            player.current.play();
          }}
          className={styles.pfp}
          src="/../public/pfp.webp"
          alt="profile"
          height={192}
          width={192}
        />
      </div>

      <h1 className={styles.name}>Ticua</h1>
      <small
        style={{
          color: "gray",
          marginTop: "97.6px",
          backgroundColor: "black",
        }}
      >
        Image made by{" "}
        <i>
          <a
            style={{ textDecoration: "underline" }}
            href="https://unsplash.com/es/@clark_fransa"
          >
            Arnold Francisca
          </a>
        </i>
      </small>
    </div>
  );
};

export default Introduction;
