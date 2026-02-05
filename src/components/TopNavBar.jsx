import { useState } from "react";
import styles from "../modules/topNavBar.module.css";

const TopNavBar = () => {
  const [action, setAction] = useState("new");

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "project") {
      console.log("Add new project");
      // later: open project modal
    }

    if (value === "client") {
      console.log("Add new client");
      // later: open client modal
    }

    // reset back to "New +"
    setAction("new");
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <select
          className={styles.sortSelect}
          value={action}
          onChange={handleChange}
        >
          <option value="new">New +</option>
          <option value="project">Project</option>
          <option value="client">Client</option>
        </select>
      </div>
    </div>
  );
};

export default TopNavBar;
