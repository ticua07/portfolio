import type { NextPage } from "next";
import styles from "../styles/Navbar.module.css";

const NavBar: NextPage = () => {
  return (
    <nav className={styles.navbar}>
      <h1>&lt;Ticua07 /&gt;</h1>

      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>

      <button>Contact</button>
    </nav>
  );
};

export default NavBar;
