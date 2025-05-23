"use client";

import { usePathname } from "next/navigation";
import { MdOutlineChat, MdNotifications, MdPublic, MdSearch  } from "react-icons/md";
import styles from "./navbar.module.css"; // Make sure this import exists if you're using CSS Modules

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          {/* Ensure MdSearch is imported */}
          <MdSearch />
          <input type="text" placeholder="search ..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
