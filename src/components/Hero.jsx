import styles from "../modules/hero.module.css";
import hero from "../images/hero2.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <img src={hero} alt="Contractor working" className={styles.heroImage} />
      <div className={styles.heroContainer}>
        <h1 className={styles.Heading}>Welcome to HandyMan: </h1>
        <h1 className={styles.Heading2}>One Dashboard, Total Control</h1>
        {/* <p className={styles.Information}>Spend less time on paper and more time creating</p> */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Start Managing</button>
          <IoIosArrowRoundForward className={styles.icon} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
