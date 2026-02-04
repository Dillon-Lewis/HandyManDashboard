import { NavLink } from "react-router-dom";
import styles from "../modules/sideBarNav.module.css";
import { GrUserWorker } from "react-icons/gr";
import { PiUsersThreeLight, PiToolbox } from "react-icons/pi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbPigMoney } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useSidebar } from "../context/SideBarContext";

const SideBarNav = () => {
  const { collapsed, toggleSideBar } = useSidebar();

  return (
    <div className={`${styles.container} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.logo}>{collapsed ? "HM" : "HandyMan"}</div>
      <nav className={styles.nav}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <AiOutlineHome className={styles.icon} />
          {!collapsed && "Home"}
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <PiToolbox className={styles.icon} />
          {!collapsed && "Projects"}
        </NavLink>
        <NavLink
          to="/Invoices"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <LiaFileInvoiceDollarSolid className={styles.icon} />
          {!collapsed && "Invoices"}
        </NavLink>
        <NavLink
          to="/Profits"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <TbPigMoney className={styles.icon} />
          {!collapsed && "Profits"}
        </NavLink>
        <NavLink
          to="/Clients"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <PiUsersThreeLight className={styles.icon} />
          {!collapsed && "Clients"}
        </NavLink>
        <NavLink
          to="/Crew"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <GrUserWorker className={styles.icon} />
          {!collapsed && "Crew"}
        </NavLink>
        <NavLink
          to="/Settings"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          <GrUserWorker className={styles.icon} />
          {!collapsed && "Setting"}
        </NavLink>
      </nav>
      <button className={styles.button} onClick={toggleSideBar}>
        {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
      </button>
    </div>
  );
};

export default SideBarNav;
