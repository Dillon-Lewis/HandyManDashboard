import { NavLink } from "react-router-dom";
import styles from "../modules/navbar.module.css";

export default function Navbar() {
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.logo} onClick={()=> scrollTo("home")}>HandyMan</p>

      <div className={styles.navContainer}>
        <button className={styles.inactiveLink} onClick={() => scrollTo("home")}>
          Home
        </button>

        <button className={styles.inactiveLink} onClick={() => scrollTo("about")}>
          About
        </button>

        <button
          className={styles.inactiveLink}
          onClick={() => scrollTo("contact")}
        >
          Contact
        </button>

        <NavLink to="/login" className={styles.inactiveLink}>
          Login
        </NavLink>
      </div>
    </div>
  );
}
