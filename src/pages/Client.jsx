import SideBarNav from "../components/SideBarNav";
import { useAuth } from "../context/AuthContext";
import styles from "../modules/client.module.css";

const Client = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <SideBarNav />
      <div className={styles.contentContainer}>Clients</div>
    </div>
  );
};

export default Client;
