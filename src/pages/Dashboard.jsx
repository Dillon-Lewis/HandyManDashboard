import SideBarNav from "../components/SideBarNav";
import { useAuth } from "../context/AuthContext";
import styles from "../modules/dashboard.module.css"

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className={styles.container}>
      <SideBarNav />
      <div className={styles.contentContainer}>
        <span>Welcome, {user?.email}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
