import type { NextPage } from "next";
import styles from "../styles/Navbar.module.css";

const NavBar: NextPage = () => {
  return (
    <nav className={styles.navbar}>
      <h1>&lt;Ticua07 /&gt;</h1>

      <button className={styles.nav__toggle}>
        <i className="fas fa-bars"></i>
      </button>

      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>

      <button className={styles.contact__button}>Contact</button>
    </nav>
  );
};

export default NavBar;
