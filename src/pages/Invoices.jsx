import SideBarNav from "../components/SideBarNav";
import TopNavBar from "../components/TopNavBar";
import { useAuth } from "../context/AuthContext";
import styles from "../modules/invoices.module.css";

const Invoices = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <SideBarNav />

      <div className={styles.mainContent}>
        <TopNavBar />
        <div className={styles.contentContainer}>
          Invoices
        </div>
      </div>
    </div>
  );
};

export default Invoices;
