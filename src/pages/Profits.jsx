import SideBarNav from "../components/SideBarNav";
import TopNavBar from "../components/TopNavBar";
import { useAuth } from "../context/AuthContext";
import styles from "../modules/profits.module.css";

const Profits = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <SideBarNav />
      <div className={styles.contentContainer}>
        <TopNavBar />
        Profits{" "}
      </div>
    </div>
  );
};

export default Profits;
