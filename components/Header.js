import Link from "next/link";

import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <div className={`${styles.header} ${styles.shadow}`}>
      <Link href="/">
        <a>COVID TRACKER</a>
      </Link>
    </div>
  );
}
