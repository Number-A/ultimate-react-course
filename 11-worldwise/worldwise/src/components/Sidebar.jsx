import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; Copyrights {new Date().getFullYear()} by Worlldwise Inc.
      </p>
    </div>
  );
}

export default Sidebar;
