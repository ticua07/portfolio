import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "../styles/Introduction.module.css";

const Introduction: NextPage = () => {
  const player = useRef(null);

  // useEffect(() => {
  //   // @ts-ignore
  //   // player.current.src = "../public/Meow - Sound Effect-6wvFozENHb8.mp3";
  //   // player.current.play();
  // }, []);

  return (
    <div className={styles.container}>
      <audio ref={player} src="/Meow - Sound Effect-6wvFozENHb8.mp3" />
      <div>
        <Image
          onClick={() => {
            // @ts-ignore
            player.current.play();
            alert("Hey! What are you doing?");
          }}
          className={styles.pfp}
          src="/pfp.webp"
          alt="profile"
          height={192}
          width={192}
        />
      </div>

      <h1 className={styles.name}>Ticua</h1>
      <small
        style={{
          color: "gray",
          marginTop: "54.8px",
          backgroundColor: "black",
        }}
      >
        Image made by{" "}
        <i>
          <a
            title="Twitter account of background picture author."
            target="_blank"
            rel="noreferrer"
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
