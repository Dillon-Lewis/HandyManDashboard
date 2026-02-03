import {
  FaTools,
  FaFileInvoiceDollar,
  FaChartLine,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import styles from "../modules/about.module.css";
import Divider from "../images/Divider.jpg";
const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.headingText}>
          Spend less time on paper and more time on projects.
        </h2>

        <p className={styles.infoText}>
          With HandyMan, we take the stressful side out of admin work. Our
          powerful, easy-to-use dashboard was designed by the working man, for
          the working man.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <FaTools className={styles.icon} />
            <h4 className={styles.featureCardHeading}>Track Projects</h4>
            <p className={styles.featureCardText}>
              Monitor job progress, deadlines, and budgets in one place.
            </p>
          </div>

          <div className={styles.featureCard}>
            <FaFileInvoiceDollar className={styles.icon} />
            <h4 className={styles.featureCardHeading}>Manage Invoices</h4>
            <p className={styles.featureCardText}>
              Track paid, unpaid, and overdue invoices with zero hassle.
            </p>
          </div>

          <div className={styles.featureCard}>
            <FaUserTie className={styles.icon} />
            <h4 className={styles.featureCardHeading}>Manage Clients</h4>
            <p className={styles.featureCardText}>
              Keep track of client contacts and project associations.
            </p>
          </div>

          <div className={styles.featureCard}>
            <FaChartLine className={styles.icon} />
            <h4 className={styles.featureCardHeading}>See Profits</h4>
            <p className={styles.featureCardText}>
              See exactly where your money goes and what you're really earning.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sectionDivider}>
        <img src={Divider} />
      </div>
    </section>
  );
};

export default About;
