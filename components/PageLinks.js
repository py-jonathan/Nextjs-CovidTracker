import Link from "next/link";
import styles from '@/styles/PageLinks.module.css';


export default function PageLinks() {
  return (
    <div className={styles.main_div}>
      <div className={styles.div}>
        <Link href="/global">
          <a className="btn btn-primary">See WorldWide cases</a>
        </Link>
      </div>
      <div className={styles.div}>
        <Link href="/countries">
          <a className="btn btn-primary">See all countries cases</a>
        </Link>
      </div>
      <div className={styles.div}>
        <Link href="/globalmap">
          <a className="btn btn-primary">See Map</a>
        </Link>
      </div>
    </div>
  );
}
