import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar.module.css";

const NavBar: NextPage = () => {
  const [isDPVisible, setIsDPVisible] = useState(true);
  const dropdown = useRef(null);

  const handleResizing = () => {
    // @ts-ignore
    dropdown.current.style.display =
      window.innerWidth > 960 && dropdown ? "flex" : "none";
  };

  const toggleDropdown = () => {
    // I don't wanna talk about this, Just let it work.
    // @ts-ignore
    dropdown.current.style.display =
      // @ts-ignore
      dropdown.current.style.display === "none" ? "flex" : "none";
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizing);
    // @ts-ignore
    dropdown.current.style.display =
      window.innerWidth > 960 && dropdown ? "flex" : "none";
  }, []);

  return (
    <nav className={styles.navbar}>
      <h1>&lt;Ticua07 /&gt;</h1>

      <button onClick={toggleDropdown} className={styles.nav__toggle}>
        <i className="fa fa-bars"></i>
      </button>

      <ul ref={dropdown}>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>

      <button className={styles.contact__button}>Contact</button>
    </nav>
  );
};

export default NavBar;
