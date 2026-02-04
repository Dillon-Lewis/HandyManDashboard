import SideBarNav from "../components/SideBarNav";
import { useAuth } from "../context/AuthContext";
import styles from "../modules/settings.module.css"

const Settings = () => {
  const { user, logout } = useAuth();

  return (
    <div className={styles.container}>
      <SideBarNav />
      <div className={styles.contentContainer}>
        <p>Settings</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Settings;
