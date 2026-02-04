import SideBarNav from "../components/SideBarNav";
import { useAuth } from "../context/AuthContext";
import styles from "../modules/crew.module.css";

const Crew = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <SideBarNav />
      <div className={styles.contentContainer}>Crew</div>
    </div>
  );
};

export default Crew;
