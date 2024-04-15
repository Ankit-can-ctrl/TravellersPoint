import { Outlet } from "react-router-dom";
import styles from "../components/Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WordlWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
