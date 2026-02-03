import styles from "../modules/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>© 2026 HandyMan | Built by Dillon Lewis</p>
      <p>
        <a href="mailto:dilllewis42@gmail.com">dilllewis42@gmail.com</a> | 
        <a href="https://www.linkedin.com/in/dillon-lewis-163960309/" target="_blank" rel="noreferrer"> LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer;
