import { useState, useRef, useEffect } from "react";
import styles from "../modules/topNavBar.module.css";
import { PiToolbox, PiUsersThreeLight } from "react-icons/pi";

const TopNavBar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.dropdown} ref={menuRef}>
        <button
          className={styles.trigger}
          onClick={() => setOpen((prev) => !prev)}
        >
          New +
        </button>

        {open && (
          <div className={styles.menu}>
            <button
              className={styles.menuItem}
              onClick={() => {
                console.log("Add new project");
                setOpen(false);
              }}
            >
              <PiToolbox className={styles.icon} />
              Project
            </button>

            <button
              className={styles.menuItem}
              onClick={() => {
                console.log("Add new client");
                setOpen(false);
              }}
            >
              <PiUsersThreeLight className={styles.icon} />  Client
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
